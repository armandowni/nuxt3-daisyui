<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0 overflow-x-scroll"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div id="header" class="flex flex-col justify-center pt-8 sm:pt-0">
        <span class="text-center font-extrabold text-xl"
          >Template project with</span
        >
        <div class="flex flex-col lg:flex-row items-center gap-0 lg:gap-2">
          <a
            class="flex justify-center sm:pt-0"
            href="https://nuxtjs.org"
            target="_blank"
          >
            <LogoNuxt />
          </a>
        </div>
      </div>
      <div class="mt-5 bg-white shadow sm:rounded-lg p-0 md:px-5 py-2 w-full">
        <div class="font-bold text-2xl pb-3 px-3 lg:px-0">Here the example</div>
        <div class="w-full border-0 md:border-2 rounded-md p-5">
          <button
            class="bg-blue-600 rounded-md text-white px-5 py-2 mb-5 text-sm"
            @click="openDialog()"
          >
            Add Data
          </button>
          <Modal
            dialogName="formInput"
            title="Input Form"
            :onCloseModal="openDialog"
          >
            <div
              class="flex flex-col justify-center items-center gap-2 w-22"
              name="test"
            >
              <span class="text-red-500">{{ errorMessage }}</span>
              <div class="border-2 border-gray-200 rounded-md">
                <input
                  type="text"
                  placeholder="Name"
                  v-model="dataSelected.name"
                  name="name"
                  class="py-1 pl-3"
                />
              </div>
              <div class="border-2 border-gray-200 rounded-md">
                <input
                  type="number"
                  placeholder="Age"
                  v-model="dataSelected.age"
                  name="age"
                  class="py-1 pl-3"
                />
              </div>

              <div class="flex gap-5" id="buttons">
                <button
                  class=""
                  v-on:click="
                    !isDataSelected
                      ? addData(dataSelected)
                      : editData(dataSelected)
                  "
                >
                  Submit
                </button>
                <button class="" v-on:click="openDialog()">Cancel</button>
              </div>
            </div>
          </Modal>
          <Modal dialogName="formDel" title="Delete Form">
            <div class="w-full">
              <span>Are you sure want to delete {{ dataSelected?.name }}?</span>
              <div class="flex gap-5" id="buttons">
                <button class="" v-on:click="delData(dataSelected)">
                  Submit
                </button>
                <button class="" v-on:click="openDialogDelete()">Cancel</button>
              </div>
            </div>
          </Modal>

          <Table
            :dataTable="resultDataTable"
            :editDialog="openDialog"
            :delDialog="openDialogDelete"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import fetchData from "../util/fetchData";

let resultDataTable: any[] = [];
let isDataSelected = false;
const dataSelected = ref({ name: "", age: null });
const errorMessage = ref("");

function openDialog(data?: any) {
  const modalInput: any = document?.getElementById("formInput");
  if (data) {
    isDataSelected = true;
    dataSelected.value = { ...data };
  }

  if (modalInput.open) {
    isDataSelected = false;
    dataSelected.value = { name: "", age: null };
    return modalInput.close();
  } else modalInput.showModal();
}
function openDialogDelete(data?: any) {
  const modalDelete: any = document?.getElementById("formDel");
  if (data) {
    isDataSelected = true;
    dataSelected.value = { ...data };
  }

  if (modalDelete.open) {
    isDataSelected = false;
    dataSelected.value = { name: "", age: null };
    return modalDelete.close();
  } else modalDelete.showModal();
}
async function getData() {
  const result = await fetchData("/test", "get");
  // console.log(result);
  resultDataTable = result.data;
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
