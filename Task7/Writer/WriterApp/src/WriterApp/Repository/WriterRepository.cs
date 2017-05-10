using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using WriterApp.Model;

namespace WriterApp.Repository
{
    public class WriterRepository : RepositoryBase<Writer>, IWriterRepository
    {
        public WriterRepository(WriterContext context):base(context)
        {
        }
        public Writer GetById(int id)
        {
            return Find().AsNoTracking().FirstOrDefault(x => x.Id == id);
        }
        public PagedList<Writer> GetWritersWithParameters(int pageSize, string filter, string direction, string sortBy, int page)
        {
            page = page - 1;
            var query = Find();
            if(!String.IsNullOrEmpty(filter))
            {
                query = query.Where(s => s.FirstName.ToUpper().Contains(filter.ToUpper()) || s.LastName.ToUpper().Contains(filter.ToUpper()));
            } 
            switch (sortBy)
            {
                case "fullname":
                    query = direction == "ASC" ? query.OrderBy(s => s.LastName).ThenBy(s => s.FirstName) : query.OrderByDescending(s => s.LastName).ThenByDescending(s => s.FirstName);
                    break;
                case "date":
                    query = direction == "ASC" ? query.OrderBy(s => s.DateOfBirth) : query.OrderByDescending(s => s.DateOfBirth);
                    break;              
                default:
                    query = direction == "ASC" ? query.OrderBy(s => s.LastName).ThenBy(s => s.FirstName) : query.OrderByDescending(s => s.LastName).ThenByDescending(s => s.FirstName);
                    break;
            }
            return new PagedList<Writer>(query, page, pageSize);
        }
        public override void Delete(int id)
        {
            var writer = Find().SingleOrDefault(x => x.Id == id);
            Remove(writer);
            SaveChanges();
        }
        public override void Edit(Writer writer)
        {
            var _writer = Find().SingleOrDefault(x => x.Id == writer.Id);
            _writer.FirstName = writer.FirstName;
            _writer.LastName = writer.LastName;
            _writer.DateOfBirth = writer.DateOfBirth;
            _writer.Biography = writer.Biography;
            SaveChanges();
        }
    }
}
