<template>
  <div class="flex h-screen">
    <!-- logo-->
    <div
      class="
        w-1/4
        mt-5
        ml-20
        flex flex-col
        justify-between
        border-r border-gray-200
      "
    >
      <div class="flex flex-col lg:items-center">
        <i class="fab fa-twitter text-2xl text-primary lg:ml-4 mb-3"></i>
        <!-- icons-->
        <div class="flex flex-col items-start mt-4">
          <ul>
            <li
              class="
                px-4
                py-2
                text-2xl
                hover:text-primary hover:bg-blue-50
                rounded-full
              "
            >
              <i class="fas fa-fw fa-home"></i>
              <span class="mr-1 hidden lg:inline-block">홈</span>
            </li>
            <li
              class="
                px-4
                py-2
                text-2xl
                hover:text-primary hover:bg-blue-50
                rounded-full
              "
            >
              <i class="fas fa-fw fa-hashtag"></i>
              <span class="mr-1 hidden lg:inline-block">탐색하기</span>
            </li>
            <li
              class="
                px-4
                py-2
                text-2xl
                hover:text-primary hover:bg-blue-50
                rounded-full
              "
            >
              <i class="far fa-fw fa-bell mr-2"></i
              ><span class="mr-1 hidden lg:inline-block">알림</span>
            </li>
            <li
              class="
                px-4
                py-2
                text-2xl
                hover:text-primary hover:bg-blue-50
                rounded-full
              "
            >
              <i class="far fa-fw fa-envelope mr-2"></i
              ><span class="mr-1 hidden lg:inline-block">쪽지</span>
            </li>
            <li
              class="
                px-4
                py-2
                text-2xl
                hover:text-primary hover:bg-blue-50
                rounded-full
              "
            >
              <i class="far fa-fw fa-bookmark mr-2"></i
              ><span class="mr-1 hidden lg:inline-block">북마크</span>
            </li>
            <li
              class="
                px-4
                py-2
                text-2xl
                hover:text-primary hover:bg-blue-50
                rounded-full
              "
            >
              <i class="far fa-fw fa-list-alt"></i>
              <span class="mr-1 hidden lg:inline-block">리스트</span>
            </li>
            <li
              class="
                px-4
                py-2
                text-2xl
                hover:text-primary hover:bg-blue-50
                rounded-full
              "
            >
              <i class="far fa-fw fa-user"></i>
              <span class="mr-1 hidden lg:inline-block">프로필</span>
            </li>
            <li
              class="
                px-4
                py-2
                text-2xl
                hover:text-primary hover:bg-blue-50
                rounded-full
              "
            >
              <i class="fas fa-fw fa-ellipsis-h"></i>
              <span class="mr-1 hidden lg:inline-block">더보기</span>
            </li>
          </ul>
        </div>
        <!--Tweet button-->
        <div class="lg:w-full lg:pr-3">
          <button
            type="button"
            class="
              mt-3
              bg-primary
              text-white
              lg:w-full
              w-12
              h-12
              rounded-full
              hover:bg-dark
            "
          >
            <span class="hidden lg:inline-block"> Tweet</span>
            <i class="fas fa-plus lg:hidden"></i>
          </button>
        </div>
      </div>
      <!--profile button-->
      <div class="lg:pr-3 mb-3">
        <button
          type="button"
          class="
            px-2
            py-1
            mt-3
            w-full
            h-12
            hidden
            rounded-full
            hover:bg-blue-50
            lg:flex
            items-center
          "
        >
          <img
            src="http://picsum.photos/100"
            class="w-10 h-10 rounded-full"
            alt=""
          />
          <div class="flex-col ml-2 hidden lg:flex">
            <span class="text-sm font-bold">zin</span>
            <span class="text-xs text-gray-500 text-left">@zin</span>
          </div>
          <i
            class="
              ml-auto
              fas
              fa-fw fa-ellipsis-h
              text-xs
              hidden
              lg:inline-block
            "
          ></i>
        </button>
        <div class="lg:hidden flex justify-center">
          <img
            src="http://picsum.photos/100"
            class="w-10 h-10 rounded-full cursor-pointer hover:opacity-80"
            alt=""
          />
        </div>
      </div>
    </div>
    <!-- 메인-->
    <div class="flex-1">
      <div class="flex h-screen">
        <!-- main section-->
        <div class="flex-1 border-r border-gray-100">
          <div class="flex flex-col">
            <!--page title-->
            <div class="border-b border-gray-100 px-3 py-2 font-bold text-lg">
              홈
            </div>
            <!--tweeting section-->
            <div class="flex px-3 py-3 border-b-8 border-gray-100">
              <img
                src="http://picsum.photos/200"
                class="w-10 h-10 rounded-full hover:opacity-80 cursor-pointer"
              />
              <div class="ml-2 flex-1 flex flex-col">
                <textarea
                  class="
                    w-full
                    text-lg
                    font-bold
                    focus:outline-none
                    resize-none
                  "
                  placeholder="무슨 일이 일어나고 있나요?"
                ></textarea>
                <div class="text-right">
                  <button
                    class="
                      bg-primary
                      text-white
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-bold
                      hover:bg-dark
                    "
                  >
                    트윗
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- trend section-->
        <div class="w-1/4">trend</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
