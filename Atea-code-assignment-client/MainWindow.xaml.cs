using Atea_code_assignment_client.Models;
using Atea_code_assignment_client.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
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

namespace Atea_code_assignment_client
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
            DataContext = new MyGamesViewModel();
        }

        private void MyGames_Clicked(object sender, RoutedEventArgs e)
        {
            DataContext = new MyGamesViewModel();
        }

        private void AddGame_Clicked(object sender, RoutedEventArgs e)
        {
            DataContext = new AddGameViewModel();
        }
    }
}
