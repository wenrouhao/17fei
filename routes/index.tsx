import { useSignal } from "@preact/signals";

import Footer from '../components/Footer.tsx'

export default function Home() {
  return (
    <div class="p-2 w-full leading-8 min-h-screen text-shadow bg-pink-400 text-lg text-red-100">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <h1 class="text-4xl font-bold my-16">情侣情趣飞行棋</h1>
        <img src="/logo.png" class="w-16 h-16" />
        <div class="text-left leading-8 font-black mt-8">
          <div style="color:red;">点击“飞行棋”体验游戏😏</div>
        </div>
        <div class="text-center mt-8">
          <a href="/fxq/index.html" class="block px-10 my-10 border rounded bg-pink-600 underline w-60">开始✈️飞行棋</a>
          {/* <a href="/card" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">任务卡牌</a>
          <a href="/position" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">姿势卡牌</a>
          <a href="/positions" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">姿势大全</a>
          <a href="/member" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">会员空间</a>
          <a href="/ai" class="block px-4 my-4 border rounded bg-pink-600 underline w-60">AI伴侣</a> */}
        </div>
        <div class="my-2">支持android，ios，平板，电脑等设备访问</div>
        <div style="color:red;" class="text-center text-1xl">点击“关于”了解详情</div>
      </div>
      <Footer></Footer>
    </div>
  );
}
