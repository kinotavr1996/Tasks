using WriterApp.Data.Model; 

namespace WriterApp.Repository
{
    public interface IWriterRepository : IRepository<Writer>
    {
        Writer GetById(int id);
    }
}
