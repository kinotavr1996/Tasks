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
        private readonly ICustomersRepository _customerRepository;
        public CustomersController(
              ICustomersRepository customerRepository)
        {
            this._customerRepository = customerRepository;

        }          

        // GET api/customers/sortParametr
        [HttpGet("", Name = "GetWithSortParametr")]
        [ProducesResponseType(typeof(List<Customer>), 200)]
        [ProducesResponseType(typeof(List<Customer>), 404)]
        public ActionResult Get([FromQuery]string sortBy, [FromQuery]string orderBy, [FromQuery]int limit, [FromQuery]int pageNumber)
        {
            var _customers = _customerRepository.GetCustomersWithParametrs(sortBy,orderBy, limit, pageNumber);
            if (_customers != null)
            {                           
                return Ok(_customers);
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
            var cust = _customerRepository.GetCustomerById(id);
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

            _customerRepository.AddCustomer(postedCustomer);

            return CreatedAtRoute("GetCustomerRoute",
                new { id = postedCustomer.Id }, postedCustomer);
        }

        // PUT api/customers/5
      /* [HttpPut("{id}")]
        [ProducesResponseType(typeof(Customer), 200)]
        [ProducesResponseType(typeof(Customer), 404)]
        [ProducesResponseType(typeof(Customer), 400)]
        public ActionResult Put(int id, [FromBody]Customer putCustomer)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(this.ModelState);
            }

            var cust = _customerRepository.GetCustomerById(id);
            if (cust == null)
            {
                return NotFound("Unable to update customer - not found!");
            }
            cust.FirstName = putCustomer.FirstName;
            cust.LastName = putCustomer.LastName;
            return Ok(cust);
        }
           */
        // DELETE api/customers/5
        [HttpDelete("{id}")]
        [ProducesResponseType(typeof(Customer), 200)]
        [ProducesResponseType(typeof(Customer), 404)]
        public ActionResult Delete(int id)
        {
            _customerRepository.Delete(id);
            return Ok($"Customer {id} Deleted");
        }
    }
}
