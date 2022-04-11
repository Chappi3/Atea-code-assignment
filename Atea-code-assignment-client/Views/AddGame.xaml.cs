using Atea_code_assignment_client.Models;
using Atea_code_assignment_client.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace Atea_code_assignment_client.Views
{
    /// <summary>
    /// Interaction logic for AddGame.xaml
    /// </summary>
    public partial class AddGame : UserControl
    {
        private readonly HttpClient client;

        public AddGame()
        {
            InitializeComponent();
            client = new();
            client.BaseAddress = new Uri("http://localhost:45405/api/");
        }

        private async void AddGame_Clicked(object sender, RoutedEventArgs e)
        {
            if (decimal.TryParse(addGamePrice.Text, out decimal price))
            {
                var gameObject = new GameObject() 
                { 
                    Id = Guid.NewGuid().ToString(),
                    Name = addGameName.Text,
                    Company = addGameCompany.Text,
                    Price = price
                };

                var response = await client.PostAsJsonAsync("gameobject", gameObject);
                if (response != null && response.IsSuccessStatusCode)
                {
                    addGameName.Text = "";
                    addGameCompany.Text = "";
                    addGamePrice.Text = "";
                    addGameError.Content = "Successfully added game!";
                }
                return;
            }
            addGameError.Content = "Something went wrong!";
        }
    }
}
