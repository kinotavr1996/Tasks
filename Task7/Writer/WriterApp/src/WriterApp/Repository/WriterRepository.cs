using System;
using System.Collections.Generic;
using System.Linq;
using WriterApp.Model;

namespace WriterApp.Repository
{
    public class WriterRepository  : IWriterRepository
    {
        private WriterContext dbContext;
        public WriterRepository(WriterContext context)
        {
            dbContext = context;
        } 
        public List<Writer> GetWriters()
        {
            return dbContext.Writers.ToList();
        } 
        public PagedList<Writer> GetWritersWithParametrs(int pageSize, string filter, string direction, string sortBy, int page = 1)
        {
            page = page - 1;
            var query = dbContext.Writers.AsQueryable();
            if (!String.IsNullOrEmpty(filter))
            {
                query = query.Where(s => s.FirstName.ToUpper().Contains(filter.ToUpper()) || s.LastName.ToUpper().Contains(filter.ToUpper()));
            } 
            switch (sortBy)
            {
                case "fullname":
                    query = direction == "ASC" ? query.OrderBy(s => s.LastName) : query.OrderByDescending(s => s.LastName);
                    break;
                case "date":
                    query = direction == "ASC" ? query.OrderBy(s => s.DateOfBirth) : query.OrderByDescending(s => s.DateOfBirth);
                    break;              
                default:
                    query = direction == "ASC" ? query.OrderBy(s => s.LastName) : query.OrderByDescending(s => s.LastName);
                    break;
            }
            return new PagedList<Writer>(query, page, pageSize);
        }
        public void AddWriter(Writer writer)
        {
            dbContext.Writers.Add(writer);
            dbContext.SaveChanges();
        }
        public Writer GetWriterById(int id)
        {
            return dbContext.Writers.Where(x => x.Id == id).FirstOrDefault();
        }
        public void Delete(int id)
        {
            var Writer = dbContext.Writers.SingleOrDefault(x => x.Id == id);
            dbContext.Writers.Remove(Writer);
            dbContext.SaveChanges();
        }
        public void EditWriter(Writer writer)
        {
            var _writer = dbContext.Writers.SingleOrDefault(x => x.Id == writer.Id);
            _writer.FirstName = writer.FirstName;
            _writer.LastName = writer.LastName;
            _writer.DateOfBirth = writer.DateOfBirth;
            _writer.Biography = writer.Biography;            
            dbContext.SaveChanges();
        }
    }
}
