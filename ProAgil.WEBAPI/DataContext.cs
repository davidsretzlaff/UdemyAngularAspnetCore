using Microsoft.EntityFrameworkCore;
using ProAgil.WebAPI.Model;

namespace ProAgil.WEBAPI
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :  base (options){}

        public DbSet<Evento> Eventos{get;set;}
    }
}