using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WriterApp.Model;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace WriterApp.Repository
{
    public abstract class RepositoryBase<T> : IRepository<T> where T : class
    {
        protected readonly WriterContext _dbContext;
        protected IQueryable<T> Find(Func<IQueryable<T>, IQueryable<T>> filter = null)
        {
            if (filter == null)
                return _dbContext.Set<T>();
            return filter(_dbContext.Set<T>());
        }
        protected virtual void SaveChanges()
        {
            _dbContext.SaveChanges();
        }
        public RepositoryBase(WriterContext context)
        {
            _dbContext = context;
        }
        public virtual IEnumerable<T> Get(Func<IQueryable<T>, IQueryable<T>> filter = null)
        {
            return Find(filter).AsNoTracking().ToList();
        }
        public virtual IPagedList<T> GetPage(int page = 1, int pageSize = 20, Func<IQueryable<T>, IQueryable<T>> filter = null)
        {
            return new PagedList<T>(Find(filter).AsNoTracking(), page, pageSize);
        }
        public virtual void Add(T entity)
        {
            _dbContext.Add(entity);
            SaveChanges();
        }
        public abstract void Edit(T entity);
        public abstract void Delete(int id);
    }
}
