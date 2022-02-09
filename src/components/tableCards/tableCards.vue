<template>
  <!-- component -->
  <link
    rel="stylesheet"
    href="https://cdn.tailgrids.com/tailgrids-fallback.css"
  />

  <!-- ====== Table Section Start -->
  <section class="bg-white py-20 lg:py-[120px]">
    <div class="container">
      <div class="flex flex-wrap -mx-4 justify-center">
        <div class="w-3/4 px-4">
          <div class="max-w-full overflow-x-auto">
            <table class="table-auto w-full">
              <thead>
                <tr class="bg-primary text-center">
                  <th
                    class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4 border-l border-transparent"
                  >
                    Identificador do card
                  </th>
                  <th
                    class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4"
                  >
                    Data de Criação do card
                  </th>
                  <th
                    class="w-1/6 min-w-[160px] text-lg font-semibold text-white py-4 lg:py-7 px-3 lg:px-4"
                  >
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    class="text-center text-dark font-medium text-base py-5 px-2 bg-[#F3F6FF] border-b border-l border-[#E8E8E8]"
                  >
                    .com
                  </td>
                  <td
                    class="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-[#E8E8E8]"
                  >
                    1 Year
                  </td>
                  <td
                    class="text-center text-dark font-medium text-base py-5 px-2 bg-white border-b border-r border-[#E8E8E8]"
                  >
                    <a
                      href=""
                      class="border-2 border-blue-500 rounded-lg font-bold text-blue-500 px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
                    >
                      Click here
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ====== Table Section End -->
</template>
