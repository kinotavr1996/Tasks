using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CRUDTest.Data;


namespace CRUDTest.Controllers
{
    public class UserController : Controller
    {
        private readonly CrudContext _context;

        public UserController(CrudContext context)
        {
            _context = context;
        }

        // GET: User
        public async Task<IActionResult> Index(
            string sortOrder,
            string currentFilter,
            string searchString,
            int? page)
        {
            ViewData["CurrentSort"] = sortOrder;
            ViewData["NameSortParm"] = String.IsNullOrEmpty(sortOrder) ? "name_desc" : "";
            ViewData["CountrySortParam"] = String.IsNullOrEmpty(sortOrder) ? "country" : "";
            ViewData["GendreSortParam"] = String.IsNullOrEmpty(sortOrder) ? "gendre" : "";


            if (searchString != null)
            {
                page = 1;
            }
            else
            {
                searchString = currentFilter;
            }

            ViewData["CurrentFilter"] = searchString;

            var User = from s in _context.Users
                           select s;
            if (!String.IsNullOrEmpty(searchString))
            {
                User = User.Where(s => s.LastName.Contains(searchString)
                                       || s.FirstMidName.Contains(searchString));
            }
            Console.WriteLine(sortOrder);
            switch (sortOrder)
            {
                case "name_desc":
                    User = User.OrderByDescending(s => s.FirstMidName);
                    break;
                case "gendre":
                    User = User.OrderBy(s => s.UserGendre);
                    break;
                case "country":
                    User = User.OrderByDescending(s => s.Country);
                    break;
                default:
                    User = User.OrderBy(s => s.LastName);
                    break;
            }

            int pageSize = 5;
            return View(await PaginatedList<User>.CreateAsync(User.AsNoTracking(), page ?? 1, pageSize));
        }

        
        // GET: User/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: User/Create      
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(
            [Bind("Country,Gendre,Phone,FirstMidName,LastName")] User user)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _context.Add(user);
                    await _context.SaveChangesAsync();
                    return RedirectToAction("Index");
                }
            }
            catch (DbUpdateException /* ex */)
            {
              
                ModelState.AddModelError("", "Unable to save changes. " +
                    "Try again, and if the problem persists " +
                    "see your system administrator.");
            }
            return View(user);
        }

        // GET: User/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users.SingleOrDefaultAsync(m => m.ID == id);
            if (user == null)
            {
                return NotFound();
            }
            return View(user);
        }
[HttpPost, ActionName("Edit")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> EditPost(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }
            var userToUpdate = await _context.Users.SingleOrDefaultAsync(s => s.ID == id);
            if (await TryUpdateModelAsync<User>(
                userToUpdate,
                "",
                s => s.FirstMidName, s => s.LastName, s => s.UserGendre,s => s.Phone,s => s.Country))
            {
                try
                {
                    await _context.SaveChangesAsync();
                    return RedirectToAction("Index");
                }
                catch (DbUpdateException /* ex */)
                {
                    //Log the error (uncomment ex variable name and write a log.)
                    ModelState.AddModelError("", "Unable to save changes. " +
                        "Try again, and if the problem persists, " +
                        "see your system administrator.");
                }
            }
            return View(userToUpdate);
        }
        // POST: User/Edit/5
       
        public async Task<IActionResult> Delete(int? id, bool? saveChangesError = false)
        {
            if (id == null)
            {
                return NotFound();
            }

            var user = await _context.Users
                .AsNoTracking()
                .SingleOrDefaultAsync(m => m.ID == id);
            if (user == null)
            {
                return NotFound();
            }

            if (saveChangesError.GetValueOrDefault())
            {
                ViewData["ErrorMessage"] =
                    "Delete failed. Try again, and if the problem persists " +
                    "see your system administrator.";
            }

            return View(user);
        }

        // POST: User/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var user = await _context.Users
                .AsNoTracking()
                .SingleOrDefaultAsync(m => m.ID == id);
            if (user == null)
            {
                return RedirectToAction("Index");
            }

            try
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return RedirectToAction("Index");
            }
            catch (DbUpdateException /* ex */)
            {
                return RedirectToAction("Delete", new { id = id, saveChangesError = true });
            }
        }

        private bool userExists(int id)
        {
            return _context.Users.Any(e => e.ID == id);
        }
    }
}