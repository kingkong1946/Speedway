using Microsoft.EntityFrameworkCore;
using Speedway.DAL.Models;

namespace Speedway.DAL
{
    public class SpeedwayContext : DbContext
    {
        public DbSet<City> Citieses { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Person> Persons { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            OnCountryCreating(modelBuilder);
            OnCityCreating(modelBuilder);
            OnPersonCreating(modelBuilder);
        }

        private static void OnCountryCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Country>()
                .Property(country => country.Name)
                .HasMaxLength(35)
                .IsRequired();
        }

        private static void OnCityCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<City>()
                .Property(city => city.Name)
                .HasMaxLength(35)
                .IsRequired();
            
            modelBuilder.Entity<City>()
                .HasOne(city => city.Country)
                .WithMany()
                .HasForeignKey(city => city.CountryId);
        }

        private static void OnPersonCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>()
                .Property(person => person.FirstName)
                .HasMaxLength(20)
                .IsRequired();
            
            modelBuilder.Entity<Person>()
                .Property(person => person.LastName)
                .HasMaxLength(20)
                .IsRequired();
            
            modelBuilder.Entity<Person>()
                .HasOne(person => person.BornCity)
                .WithMany()
                .HasForeignKey(person => person.BornCity);
        }
    }
}