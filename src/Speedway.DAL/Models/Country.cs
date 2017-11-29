using System.Collections.Generic;

namespace Speedway.DAL.Models
{
    public class Country : IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}