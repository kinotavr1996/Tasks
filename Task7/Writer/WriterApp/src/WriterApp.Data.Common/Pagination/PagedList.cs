﻿using System.Collections.Generic;
using System.Linq; 

namespace WriterApp.Data.Common.Pagination
{
    public class PagedList<T> : List<T>, IPagedList<T>
    {
        public int TotalCount { get; private set; }
        public int Page { get; private set; }
        public int PageSize { get; private set; }
        public PagedList(int totalCount = 0,int page = 0, int size = 4)
        {
            TotalCount = totalCount;
            Page = page;
            PageSize = size;
        }
        public PagedList(IQueryable<T> set, int page, int size)
        {
            page = page - 1;
            TotalCount = set.Count();
            PageSize = size;
            Page = page;
            if (page == 0)
                AddRange(set.Take(size));
            else
                AddRange(set.Skip(page * size).Take(size));
        }
    }
}
