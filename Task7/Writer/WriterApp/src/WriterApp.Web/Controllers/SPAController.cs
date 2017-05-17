using Microsoft.AspNetCore.Mvc;



namespace WriterApp.Web.Controllers
{
    public class SPAController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}
