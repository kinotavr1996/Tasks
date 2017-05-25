using Xunit;
using WriterApp.Web.ViewModel;
using WriterApp.Repository;
using Microsoft.AspNetCore.Mvc;
using Moq;
using WriterApp.Web.Controllers;

namespace WriterApp.Tests.ControllersTests
{
    public class WriterControllerTests
    {
        [Fact]
        public void AddWriterReturnsAViewResultWithWriterModel()
        {
            var mockRepo = new Mock<IWriterRepository>();
            HomeController controller = new HomeController(mockRepo.Object);
            controller.ModelState.AddModelError("FirstName", "First name is required");
            WriterCreateModel model = new WriterCreateModel();
            var result = controller.Create(model);
            var viewResult = Assert.IsType<ViewResult>(result);
            Assert.Equal(model, viewResult?.Model);
        }

        [Fact]
        public void AddWriterReturnsARedirectAndAddsWriter()
        {
            var mock = new Mock<IWriterRepository>();
            var controller = new HomeController(mock.Object);
            var model = new WriterCreateModel()
            {
                FirstName = "Oleg",
                LastName = "Gaevskiy",
                DateOfBirth = new System.DateTime(1996, 5, 2),
                Biography = "Work in ArtyGeek"
            };

            var result = controller.Create(model);
            var redirectToActionResult = Assert.IsType<RedirectToActionResult>(result);
            Assert.Null(redirectToActionResult.ControllerName);
            Assert.Equal("Index", redirectToActionResult.ActionName);
        }
    }
}
