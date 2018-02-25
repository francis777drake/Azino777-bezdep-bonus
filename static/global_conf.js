const GlobalConfigs = {
  pageTitle: "Azino777 бездеп бонус",
  navigationType: ProjectConsts.allNavigationTypes.singlePage,  //can be hamburger, singlePage, listMenu
  useIFramesEverywhere: false,
  homeSitePageUrl: "http://foral.top/",
  menuItems: [
    //{icon: 'home', text: 'Главная', url:"http://foral.top/"},
    {
      icon: 'list', text: 'Видео',
      url: "http://foral.top/", notLoadToIFrame: true
    },
    //{icon: 'photo', text: 'Игры',
    // url:"http://foral.top/"},
    {
      icon: 'info', text: 'О нас',
      url: "http://foral.top/"
    },
    {
      icon: 'mail', text: 'Контакты',
      url: "http://foral.top/"
    },
    {
      icon: 'group', text: 'О разработчике', url: "",
      onClick: function () {
        CSharp.AboutDeveloper();
      }
    }
  ],
  styling: {
    isDarkTheme: 0,
    menuColor: "brown lighten-3", //from https://vuetifyjs.com/style/colors
    showLogo: false,
    showTitleInMenu: true,
    isMenuFlat: false
  }
}



