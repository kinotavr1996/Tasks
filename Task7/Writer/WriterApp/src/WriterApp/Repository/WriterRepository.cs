﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using WriterApp.Model;

namespace WriterApp.Repository
{
    public class WriterRepository : RepositoryBase<Writer>, IWriterRepository
    {
        public WriterRepository(WriterContext context) : base(context)
        {
        }
        public Writer GetById(int id)
        {
            return Find().AsNoTracking().FirstOrDefault(x => x.Id == id);
        }
        public override void Delete(int id)
        {
            var writer = Find().SingleOrDefault(x => x.Id == id);
            Remove(writer);
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
