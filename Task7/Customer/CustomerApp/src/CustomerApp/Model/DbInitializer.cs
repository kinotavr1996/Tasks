using Microsoft.EntityFrameworkCore;

namespace CustomerApp.Model
{
    public static class DbInitializer
    {
        public static void Initialize(CustomerContext context)
        {
            context.Database.Migrate(); 

        }

    }
}
