using Atea_code_assignment_client.Models;
using Atea_code_assignment_client.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Text.Json;
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
    /// Interaction logic for MyGames.xaml
    /// </summary>
    public partial class MyGames : UserControl
    {
        private readonly HttpClient client;

        public MyGames()
        {
            InitializeComponent();
            client = new();
            client.BaseAddress = new Uri("http://localhost:45405/api/");
            GetGameObjects();
        }

        private async void GetGameObjects()
        {
            var response = await client.GetStringAsync("gameobject");
            Games.ItemsSource = JsonSerializer.Deserialize<List<GameObject>>(response);
        }

        private async void SearchButton_Clicked(object sender, RoutedEventArgs e)
        {
            var response = await client.GetStringAsync("gameobject?search=" + searchInput.Text);
            Games.ItemsSource = JsonSerializer.Deserialize<List<GameObject>>(response);
        }

        private void GameButton_Clicked(object sender, RoutedEventArgs e)
        {
            var gameId = (sender as Button).Tag.ToString();
            DataContext = new GameViewModel();
        }
    }
}
