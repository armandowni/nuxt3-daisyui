<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0 overflow-x-scroll">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div id="header" class="flex flex-col justify-center pt-8 sm:pt-0">
        <span class="text-center font-extrabold text-xl">Template project with</span>
        <div class="flex flex-col lg:flex-row items-center gap-0 lg:gap-2">
          <a class="flex justify-center sm:pt-0" href="https://nuxtjs.org" target="_blank">
            <LogoNuxt />
          </a>
          <span class="text-6xl">+</span>
          <a class="flex justify-center sm:pt-0" href="https://daisyui.com/" target="_blank">
            <LogoDaisy />
          </a>
        </div>
      </div>
      <div class="mt-5 bg-white shadow sm:rounded-lg p-0 md:px-5 py-2 w-full pb-10">
        <div class="font-bold text-2xl pb-3 px-3 lg:px-0">Here the example</div>
        <div class="w-full border-0 md:border-2 rounded-md p-5">
          <button class="bg-blue-600 rounded-md text-white px-5 py-2 mb-5 text-sm" @click="openDialog()">
            Add Data
          </button>
          <Modal title="Input Form" :closeModal="openDialog" :isDialog="isModalAddEdit">
            <div class="flex flex-col justify-center items-center gap-2 w-22">
              <span class="text-red-500">{{ errorMessage }}</span>
              <Field title="Name" :required="true">
                <input type="text" v-model="dataSelected.name" name="name" />
              </Field>
              <Field title="Age" :required="true">
                <input type="number" v-model="dataSelected.age" name="age" />
              </Field>

              <div class="flex gap-5" id="buttons">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-xl" v-on:click="
                  !isDataSelected
                    ? addData(dataSelected)
                    : editData(dataSelected)
                  ">
                  Submit
                </button>
                <button class="bg-red-500 text-white px-4 py-2 rounded-xl" v-on:click="openDialog()">
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
          <Modal title="Delete Form" :closeModal="openDialogDelete" :isDialog="isModalDelete">
            <div class="w-full">
              <span>Are you sure want to delete {{ dataSelected?.name }}?</span>
              <div class="flex gap-5" id="buttons">
                <button class="bg-blue-500 text-white px-4 py-2 rounded-xl" v-on:click="delData(dataSelected)">
                  Submit
                </button>
                <button class="bg-red-500 text-white px-4 py-2 rounded-xl" v-on:click="openDialogDelete()">
                  Cancel
                </button>
              </div>
            </div>
          </Modal>

          <Table :dataTable="resultDataTable" :editDialog="openDialog" :delDialog="openDialogDelete" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import fetchData from "../util/fetchData";

let resultDataTable: any[] = [];
let isDataSelected = false;
const isModalAddEdit = ref(false);
const isModalDelete = ref(false);
const dataSelected = ref({ name: "", age: null });
const errorMessage = ref("");

function openDialog(data?: any) {
  if (isModalAddEdit.value) {
    isDataSelected = false;
    dataSelected.value = { name: "", age: null };
    return (isModalAddEdit.value = false);
  } else {
    isModalAddEdit.value = true;
    if (data) {
      isDataSelected = true;
      dataSelected.value = { ...data };
    }
  }
}
function openDialogDelete(data?: any) {
  if (isModalDelete.value) {
    isDataSelected = false;
    dataSelected.value = { name: "", age: null };
    return (isModalDelete.value = false);
  } else {
    isModalDelete.value = true;
    if (data) {
      isDataSelected = true;
      dataSelected.value = { ...data };
    }
  }
}
async function getData() {
  const result = await fetchData("/test", "get");
  resultDataTable = result?.data[0].sort((a: any, b: any) => {
    const aStatus = (a.status & 2) === 2 ? 1 : 0;
    const bStatus = (b.status & 2) === 2 ? 1 : 0;
    return bStatus - aStatus;
  }) || [];
  console.log(resultDataTable);
  return;
}
async function addData(data: any) {
  const result = JSON.parse(JSON.stringify(data));
  result.status |= 2;

  if (!result.name || !result.age) {
    errorMessage.value = "Name or age cannot empty";
    setTimeout(() => {
      errorMessage.value = "";
    }, 5000);
    return;
  }
  await fetchData("/test", "post", null, JSON.stringify(result)).then(
    async () => {
      openDialog();
      await getData();
    }
  );
}
async function editData(data: any) {
  const result = JSON.parse(JSON.stringify(data));

  if (!result.name || !result.age) {
    errorMessage.value = "Name or age cannot empty";
    setTimeout(() => {
      errorMessage.value = "";
    }, 5000);
    return;
  }
  await fetchData("/test", "put", null, JSON.stringify(result)).then(
    async () => {
      openDialog();
      await getData();
    }
  );
  await fetchData("/test", "put");
}
async function delData(data: any) {
  if (!data) {
    errorMessage.value = "Data cannot empty";
    setTimeout(() => {
      errorMessage.value = "";
    }, 5000);
    return;
  }

  await fetchData(
    "/test",
    "delete",
    null,
    JSON.parse(JSON.stringify(data))
  ).then(async () => {
    openDialogDelete();
    await getData();
  });
}

await getData();
</script>
