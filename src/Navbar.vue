<template> <!-- Navbar links -->
    <nav>
      <div class="menu-item"><a href="/">Home</a></div>
      <div class="menu-item"><a href="/about.html">About</a></div>
      <Dropdown title="Events" :items="events" />
      <div class="menu-item "><a href="/notfound.html">Merchandise</a></div>
      <div class="menu-item"><a href="/contact.html">Contact</a></div>
      </nav>
    </template>
    
    <!-- Imported dropdown component -->
    <script>
    import Dropdown from './components/Dropdown.vue';
    export default {
      name: 'NavBar',
      components: {
        Dropdown
      },
      data () {
        return {
            events: [
            {
                title: 'Fish Holes',
                link: '/notfound.html'
            },
            {
                title: 'Panmure',
                link: '/notfound.html'
            }
            ]
        }
      },
    }
    </script>
    
    <style>
      nav {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      nav .menu-item {
        color:#FFF;
        padding: 10px 20px;
        position: relative;
        text-align: center;
        border-bottom: 3px solid transparent;
        display: flex;
        transition: 0.4s;
      }
      
      nav .menu-item.active,
      nav .menu-item:hover {
        background-color: #1a1a1a; 
        border-bottom-color: #990000;
      }
      
      nav .menu-item a {
        color: inherit;
        text-decoration: none;
      }
    </style>