using System;

namespace Speedway.DAL.Models
{
    public class Person : IEntity
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }

        public int BornCityId { get; set; }
        
        public virtual City BornCity { get; set; }
    }
}
