using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
