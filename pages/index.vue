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
          <span class="text-6xl">+</span>
          <a
            class="flex justify-center sm:pt-0"
            href="https://typeorm.io/"
            target="_blank"
          >
            <LogoTypeorm />
          </a>
        </div>
        <span class="text-center font-extrabold text-xl"
          >and many more ...</span
        >
      </div>
      <div class="mt-5 bg-white shadow sm:rounded-lg p-0 md:px-5 py-2 w-full">
        <div class="font-bold text-2xl pb-3 px-3 lg:px-0">Here the example</div>
        <div class="w-full border-0 md:border-2 rounded-md p-5">
          <button
            class="bg-blue-600 rounded-md text-white px-5 py-2 mb-5 text-sm"
            @click="addDialog()"
          >
            Add Data
          </button>
          <Modal
            :isDialog="dialogAdd || dialogEdit"
            :closeModal="() => cancel()"
          >
            <div class="pb-5 px-5">
              <div class="flex flex-col justify-center items-center gap-2 w-22">
                <span class="text-red-500">{{ errorMessage }}</span>
                <div class="border-2 border-gray-200 rounded-md">
                  <input
                    type="text"
                    placeholder="Name"
                    v-model="dataForm.name"
                    name="name"
                    class="py-1 pl-3"
                  />
                </div>
                <div class="border-2 border-gray-200 rounded-md">
                  <input
                    type="number"
                    placeholder="Age"
                    v-model="dataForm.age"
                    name="age"
                    class="py-1 pl-3"
                  />
                </div>

                <div class="flex gap-5" id="buttons">
                  <button
                    class=""
                    v-on:click="
                      isAddForm ? addData(dataForm) : editData(dataForm)
                    "
                  >
                    Submit
                  </button>
                  <button
                    class="bg-blue-500 rounded-md text-white py-3 px-5"
                    v-on:click="cancel()"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Modal>
          <Modal :isDialog="dialogDel" :closeModal="() => cancel()">
            <div class="w-full">
              <span>Are you sure want to delete {{ dataForm?.name }}?</span>
              <div class="flex gap-5" id="buttons">
                <button class="" v-on:click="delData(dataForm)">Submit</button>
                <button
                  class="bg-blue-500 rounded-md text-white py-3 px-5"
                  s
                  v-on:click="cancel()"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>

          <Table
            :dataTable="resultDataTable[0]"
            :editDialog="editDialog"
            :delDialog="delDialog"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useApi } from "../endpoints";

const api = useApi();

export default {
  data() {
    return {
      resultDataTable: [],
      dialogAdd: false,
      dialogEdit: false,
      dialogDel: false,
      dataForm: {
        name: null,
        age: null,
      },
      isAddForm: false,
      errorMessage: "",
    };
  },
  methods: {
    addDialog() {
      this.dialogAdd = true;
      this.isAddForm = true;
    },
    editDialog(data: any) {
      delete data.created;
      delete data.updated;
      delete data.deleted;

      this.dataForm = data;
      this.dialogEdit = true;
      this.isAddForm = false;
    },
    delDialog(data: any) {
      delete data.created;
      delete data.updated;
      delete data.deleted;
      this.dataForm = data;
      this.dialogDel = true;
    },
    async addData(data: any) {
      if (!data.age || !data.name) {
        this.errorMessage = "Name or age cannot empty";
        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
        return;
      }
      data.age = parseInt(data.age);

      await api.post(`/test`, data);
      this.cancel();
    },
    async editData(data: any) {
      if (!data.age || !data.name) {
        this.errorMessage = "Name or age cannot empty";
        setTimeout(() => {
          this.errorMessage = "";
        }, 5000);
        return;
      }
      data.age = parseInt(data.age);
      await api.put(`/test/${data?.id}`, data);
      this.cancel();
    },
    async delData(data: any) {
      await api.del(`/test/${data?.id}`);
      this.cancel();
    },
    async cancel() {
      this.dialogAdd = false;
      this.dialogEdit = false;
      this.dialogDel = false;

      this.dataForm.name = null;
      this.dataForm.age = null;

      this.getData();
    },
    async getData() {
      this.resultDataTable = await api.get("/test");
      // console.log(this.resultDataTable);
    },
  },
  async mounted() {
    await this.getData();
  },
};
</script>

<!-- <v-card>
              <v-card-title class="">
                {{ isAddForm ? "Add" : "Edit" }} Data
              </v-card-title>

              <div class="pb-5 px-5">
                <div
                  class="flex flex-col justify-center items-center gap-2 w-22"
                >
                  <span class="text-red-500">{{ errorMessage }}</span>
                  <div class="border-2 border-gray-200 rounded-md">
                    <input
                      type="text"
                      placeholder="Name"
                      v-model="dataForm.name"
                      name="name"
                      class="py-1 pl-3"
                    />
                  </div>
                  <div class="border-2 border-gray-200 rounded-md">
                    <input
                      type="number"
                      placeholder="Age"
                      v-model="dataForm.age"
                      name="age"
                      class="py-1 pl-3"
                    />
                  </div>

                  <div class="flex gap-5" id="buttons">
                    <button
                      class=""
                      v-on:click="
                        isAddForm ? addData(dataForm) : editData(dataForm)
                      "
                    >
                      Submit
                    </button>
                    <button
                      class="bg-blue-500 rounded-md text-white py-3 px-5"
                      v-on:click="cancel()"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </v-card> -->
