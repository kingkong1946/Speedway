namespace Speedway.DAL.Models
{
    public class City : IEntity
    {
        public string Name { get; set; }

        public int CountryId { get; set; }

        public virtual Country Country { get; set; }
        public int Id { get; set; }
    }
}