<div class="coffee-stub">
    <div class="loader"></div>
</div>

<style lang="less">
.coffee-stub {
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader,
.loader:after {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.loader {
  margin: 60px auto;
  font-size: 3px;
  position: relative;
  text-indent: -9999em;
  border-top: 1.1em solid rgba(0,0,0, 0.2);
  border-right: 1.1em solid rgba(0,0,0, 0.2);
  border-bottom: 1.1em solid rgba(0,0,0, 0.2);
  border-left: 1.1em solid #000;
  transform: translateZ(0);
  animation: loading 1.1s infinite linear;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
