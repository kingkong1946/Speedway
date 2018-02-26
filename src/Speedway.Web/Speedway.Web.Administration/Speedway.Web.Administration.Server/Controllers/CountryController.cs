using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Speedway.DAL.Models;

namespace Speedway.Web.Administration.Server.Controllers
{
    [Route("api/[controller]")]
    public class CountryController : Controller
    {
        [HttpGet]
        public IEnumerable<Country> Index()
        {
            var persons = new List<Country>
            {
                new Country {Id = 0, Name = "Poland"},
                new Country {Id = 1, Name = "Denmark"},
                new Country {Id = 2, Name = "Sweden"},
                new Country {Id = 3, Name = "Russia"},
                new Country {Id = 4, Name = "Great Britain"},
                new Country {Id = 5, Name = "Australia"}
            };

            return persons;
        }
    }
}