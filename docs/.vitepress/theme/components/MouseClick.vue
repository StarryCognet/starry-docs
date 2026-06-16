<template>
  <canvas
    ref="canvas"
    style="position: fixed; left: 0; top: 0; pointer-events: none; z-index: 999999"
  ></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const canvas = ref(null);
let animationFrameId = null;
let particles = [];
let circles = [];
const colors = ["#FF1461", "#18FF92", "#5A87FF", "#FBF38C"];
let lastClickTime = 0;
const CLICK_DELAY = 100; // 点击间隔限制，防止频繁点击

// 设置画布大小
function setCanvasSize() {
  const canvasEl = canvas.value;
  canvasEl.width = window.innerWidth;
  canvasEl.height = window.innerHeight;
  canvasEl.style.width = window.innerWidth + "px";
  canvasEl.style.height = window.innerHeight + "px";
}

// 创建粒子
function createParticle(x, y) {
  const angle = Math.random() * Math.PI * 2;
  const speed = 1 + Math.random() * 2;
  const radius = 2 + Math.random() * 6;
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  return {
    x,
    y,
    radius,
    color,
    speedX: Math.cos(angle) * speed,
    speedY: Math.sin(angle) * speed,
    life: 30 + Math.random() * 40, // 减少生命周期
    currentLife: 0,
    draw(ctx) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    },
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.currentLife++;
      this.radius *= 0.96;
      
      return this.currentLife < this.life;
    }
  };
}

// 创建圆形扩散效果
function createCircle(x, y) {
  const radius = 3 + Math.random() * 8;
  const color = "#FFF";
  
  return {
    x,
    y,
    radius,
    color,
    maxRadius: 40 + Math.random() * 60, // 减少最大半径
    lineWidth: 4, // 减少线宽
    alpha: 0.6,
    speed: 1 + Math.random() * 0.5, // 减慢速度
    draw(ctx) {
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.lineWidth = this.lineWidth;
      ctx.strokeStyle = this.color;
      ctx.stroke();
      ctx.globalAlpha = 1;
    },
    update() {
      this.radius += this.speed;
      this.alpha *= 0.95;
      this.lineWidth *= 0.97;
      return this.radius < this.maxRadius && this.alpha > 0.05;
    }
  };
}

// 创建随机圆形
function createRandomCircle(x, y) {
  const radius = 1;
  const color = colors[Math.floor(Math.random() * colors.length)];
  const maxRadius = 30 + Math.random() * 30; // 减少最大半径
  
  return {
    x,
    y,
    radius,
    color,
    maxRadius,
    alpha: 1,
    speed: 0.5 + Math.random() * 1.5, // 减慢速度
    draw(ctx) {
      ctx.globalAlpha = this.alpha;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.globalAlpha = 1;
    },
    update() {
      this.radius += this.speed;
      this.alpha *= 0.94;
      return this.radius < this.maxRadius && this.alpha > 0.05;
    }
  };
}

// 动画循环
function animate() {
  const ctx = canvas.value.getContext("2d");
  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height);
  
  // 更新并绘制粒子
  particles = particles.filter(particle => {
    particle.update();
    particle.draw(ctx);
    return particle.currentLife < particle.life;
  });
  
  // 更新并绘制圆形
  circles = circles.filter(circle => {
    const shouldKeep = circle.update();
    circle.draw(ctx);
    return shouldKeep;
  });
  
  animationFrameId = requestAnimationFrame(animate);
}

// 处理点击事件
function handleClick(e) {
  const now = Date.now();
  // 限制点击频率，防止性能问题
  if (now - lastClickTime < CLICK_DELAY) {
    return;
  }
  lastClickTime = now;
  
  const x = e.clientX || (e.touches && e.touches[0] && e.touches[0].clientX) || 0;
  const y = e.clientY || (e.touches && e.touches[0] && e.touches[0].clientY) || 0;
  
  // 减少粒子数量
  for (let i = 0; i < 12; i++) {
    particles.push(createParticle(x, y));
  }
  
  // 创建圆形扩散效果
  circles.push(createCircle(x, y));
  
  // 创建随机圆形
  circles.push(createRandomCircle(x, y));
}

onMounted(() => {
  setCanvasSize();
  const tapEvent = "ontouchstart" in window ? "touchstart" : "mousedown";
  window.addEventListener(tapEvent, handleClick);
  window.addEventListener("resize", setCanvasSize);
  animate();
});

onUnmounted(() => {
  const tapEvent = "ontouchstart" in window ? "touchstart" : "mousedown";
  window.removeEventListener(tapEvent, handleClick);
  window.removeEventListener("resize", setCanvasSize);
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
});
</script>