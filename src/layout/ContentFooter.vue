<template>
  <footer class="footer">
    <div class="container-fluid">
      <nav>
        <ul class="footer-menu">
          <li>
            <router-link :to="{ path: '/admin' }">Project Handler Dashboard</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright text-center">
        &copy; Coded with
        <i class="fa fa-heart heart"></i> by
        <a href="https://binarcode.com" target="_blank">Team 3</a>.
        Designed by IS.
      </div>
    </div>
  </footer>
</template>
<script>
export default {}

</script>
<style></style>
