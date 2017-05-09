using System.Collections.Generic; 
using WriterApp.Model;

namespace WriterApp.Repository
{
    public interface IWriterRepository
    {
        List<Writer> GetWriters();
        PagedList<Writer> GetWritersWithParametrs(int pageSize, string filter, string direction, string sortBy = "ASC", int page = 1);
        Writer GetWriterById(int id);
        void AddWriter(Writer writer);
        void Delete(int id);
        void EditWriter(Writer writer);
    }
}
