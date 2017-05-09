using Microsoft.EntityFrameworkCore;

namespace WriterApp.Model
{
    public static class DbInitializer
    {
        public static void Initialize(WriterContext context)
        {
            context.Database.Migrate();
        }

    }
}
