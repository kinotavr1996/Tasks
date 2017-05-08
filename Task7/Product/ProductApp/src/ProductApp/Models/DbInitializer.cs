
using Microsoft.EntityFrameworkCore;

namespace Crudtest.Models
{
    public static class DbInitializer
    {
        public static void Initialize(CustomerContext context)
        {
            context.Database.Migrate();
         

        }
       
    }
}
