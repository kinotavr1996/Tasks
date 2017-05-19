using Microsoft.AspNetCore.Mvc;

namespace WriterApp.Web.Controllers
{
    public class SPAController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
