using Microsoft.AspNetCore.Mvc;

namespace Speedway.Web.Administration.Controllers
{
    public class RidersController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}