<template>
  <div id="app">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <router-link 
        to="/" 
        class="navbar-brand">Пользователи</router-link>
      <button 
        class="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse" 
        aria-expanded="false" 
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"/>
      </button>
      <div 
        id="navbarCollapse" 
        class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <router-link 
            to="/"
            tag="li" 
            class="nav-item">
            <a class="nav-link">Список пользователей</a>
          </router-link>
          <router-link 
            to="/create-user" 
            tag="li" 
            class="nav-item">
            <a class="nav-link">Создать пользователя</a>
          </router-link>
        </ul>
      </div>
    </nav>
    <main 
      role="main" 
      class="container">
      <router-view/>
    </main>
  </div>
</template>
