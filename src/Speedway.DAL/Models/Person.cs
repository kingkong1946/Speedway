using System;
using System.Collections.Generic;

namespace Speedway.DAL.Models
{
    public abstract class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        
        public ICollection<string> Licences { get; set; }
    }
}