using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoreWebAPIAndAngular.Model;
using CoreWebAPIAndAngular.Repository;

namespace CoreWebAPIAndAngular.Controllers
{
    [Route("api/[controller]")]
    public class CustomersController : Controller
    {
        List<Customer> _customers;

        public CustomersController(ICustomersRepository repo)
        {
            _customers = repo.Customers;
        }
        // GET api/customers/sortParametr
        [HttpGet("", Name = "GetWithSortParametr")]
        [ProducesResponseType(typeof(List<Customer>), 200)]
        [ProducesResponseType(typeof(List<Customer>), 404)]
        public ActionResult Get([FromQuery]string sortBy, [FromQuery]string orderBy, [FromQuery]int limit, [FromQuery]int pageNumber)
        {
            if (_customers != null)
            {                       
                int _skipPage = pageNumber * limit;
                IEnumerable<Customer> cust = _customers;
                switch (sortBy)
                {
                    case "firstName":
                        cust = (orderBy == "ASC") ? _customers.OrderBy(x => x.FirstName).ToList() : _customers.OrderByDescending(x => x.FirstName).ToList();
                        break;
                    case "lastName":
                        cust = (orderBy == "ASC") ? _customers.OrderBy(x => x.LastName).ToList() : _customers.OrderByDescending(x => x.LastName).ToList();
                        break;
                    case "email":
                        cust = (orderBy == "ASC") ? _customers.OrderBy(x => x.Email).ToList() : _customers.OrderByDescending(x => x.Email).ToList();
                        break;
                    default:
                        break;
                }
                cust = cust.Skip(_skipPage).Take(limit);
                return Ok(cust);
            }
            else
            {
                return NotFound("No customers found!");
            }


        }
    
         

        // GET api/customers/1
        [HttpGet("{id}", Name = "GetCustomerRoute")]
        [ProducesResponseType(typeof(Customer), 200)]
        [ProducesResponseType(typeof(Customer), 404)]
        public ActionResult Get(int id)
        {
            var cust = _customers.Where(c => c.Id == id).SingleOrDefault();
            if (cust == null)
            {
                return NotFound("Customer not found!");
            }
            return Ok(cust);
        }

        // POST api/customers
        [HttpPost]
        [ProducesResponseType(typeof(Customer), 201)]
        [ProducesResponseType(typeof(Customer), 400)]
        public ActionResult Post([FromBody]Customer postedCustomer)
        {
            if (postedCustomer == null || !ModelState.IsValid)
            {
                return BadRequest("Customer is invalid.!");
            }

            //Create a fake id for posted customer
            var maxId = _customers.Max(c => c.Id);
            var newId = ++maxId;
            postedCustomer.Id = newId;
            postedCustomer.Address = new Address();
            postedCustomer.Address.Id = newId;
            _customers.Add(postedCustomer);

            return CreatedAtRoute("GetCustomerRoute",
                new { id = postedCustomer.Id }, postedCustomer);
        }

        // PUT api/customers/5
        [HttpPut("{id}")]
        [ProducesResponseType(typeof(Customer), 200)]
        [ProducesResponseType(typeof(Customer), 404)]
        [ProducesResponseType(typeof(Customer), 400)]
        public ActionResult Put(int id, [FromBody]Customer putCustomer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }

            var cust = _customers.Where(c => c.Id == id).SingleOrDefault();
            if (cust == null)
            {
                return NotFound("Unable to update customer - not found!");
            }
            cust.FirstName = putCustomer.FirstName;
            cust.LastName = putCustomer.LastName;
            return Ok(cust);
        }

        // DELETE api/customers/5
        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(Customer), 200)]
        [ProducesResponseType(typeof(Customer), 404)]
        public ActionResult Delete(int id)
        {
            var cust = _customers.Where(c => c.Id == id).SingleOrDefault();

            if (cust == null)
            {
                return NotFound("Unable to delete customer - not found!");
            }

            _customers.Remove(cust);
            return Ok($"Customer {id} Deleted");
        }
    }
}
