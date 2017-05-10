using System.Collections.Generic;
using System.Linq;
using WriterApp.Repository;

namespace WriterApp.Model
{
    public class PagedList<T> : List<T>, IPagedList<T>
    {
        public int TotalCount { get; private set; }
        public int Page { get; private set; }
        public int PageSize { get; private set; }
        public PagedList(IQueryable<T> set, int page, int size)
        {
            TotalCount = set.Count();
            PageSize = size;
            Page = page;
            if (page == 0)
                AddRange(set.Take(size).ToList());
            else
                AddRange(set.Skip(page * size).Take(size).ToList());
        }
    }
}
