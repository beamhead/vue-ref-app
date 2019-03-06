<template>
  <div>
    <vue-headful title="Inspect - Register" description="" />
    <div class="container is-fullheight hero-body">
      <div class="columns is-centered">
        <div class="column is-6">
          <login-logo></login-logo>
          This is left area for good ideas
        </div>
        <div class="column is-6">
          <div class="columns">
            <div class="column is-12">
              <b-tabs
                v-model="activeTab"
                position="is-centered"
                size="is-large"
              >
                <b-tab-item label="Individual User">
                  <b-field label="Your Name">
                    <b-input
                      placeholder="Your Name"
                      v-model="nameSurname"
                    ></b-input>
                  </b-field>
                  <b-field label="Your e-mail">
                    <b-input
                      placeholder="Your e-mail"
                      type="email"
                      v-model="email"
                    ></b-input>
                  </b-field>
                  <b-field label="Your password">
                    <b-input
                      placeholder="Your password"
                      type="password"
                      v-model="password"
                      password-reveal
                    ></b-input>
                  </b-field>
                  <b-field label="Your password again">
                    <b-input
                      placeholder="Your password again"
                      type="password"
                      v-model="passwordAgain"
                      password-reveal
                    ></b-input>
                  </b-field>
                  <b-field>
                    <b-checkbox v-model="memberCondition"></b-checkbox
                    ><a class="is-dark" @click="memberConditionModal()"
                      >I Accept the Terms of Membership</a
                    >
                  </b-field>
                  <b-field>
                    <b-checkbox v-model="marketingOperations">
                      The bookreads.com web site can send e-mail or SMS to me.
                    </b-checkbox>
                  </b-field>
                </b-tab-item>

                <b-tab-item label="Published">
                  <b-field label="Your Name">
                    <b-input
                      placeholder="Your Name"
                      v-model="nameSurname"
                    ></b-input>
                  </b-field>
                  <b-field label="Your e-mail">
                    <b-input
                      placeholder="Your e-mail"
                      type="email"
                      v-model="email"
                    ></b-input>
                  </b-field>
                  <b-field label="Your password">
                    <b-input
                      placeholder="Your password"
                      type="password"
                      v-model="password"
                      password-reveal
                    ></b-input>
                  </b-field>
                  <b-field label="Your password again">
                    <b-input
                      placeholder="Your password again"
                      type="password"
                      v-model="passwordAgain"
                      password-reveal
                    ></b-input>
                  </b-field>
                  <b-field>
                    <b-checkbox v-model="memberCondition"></b-checkbox
                    ><a class="is-dark">I Accept the Terms of Membership</a>
                  </b-field>
                  <b-field>
                    <b-checkbox v-model="marketingOperations">
                      The bookreads.com web site can send e-mail or SMS to me.
                    </b-checkbox>
                  </b-field>
                </b-tab-item>
              </b-tabs>
            </div>
          </div>
          <div class="columns">
            <div class="column is-12">
              <button class="button is-dark is-large is-fullwidth">
                Register
              </button>
              <div class="column is-12 has-text-centered">
                Are you already a member
                <a class="is-dark">Click here to login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      memberType: 0,
      activeTab: 0,
      memberCondition: false,
      marketingOperations: false,
      nameSurname: "",
      email: "",
      password: "",
      passwordAgain: ""
    };
  }
};
</script>

<style scoped>
.why-should-i-register {
  margin-top: 20px !important;
}

.why-should-i-register-sub {
  margin-top: 10px !important;
}
.icon {
  border: 1px solid #e3e3e3 !important;
  border-radius: 100% !important;
}

.icon.is-large {
  height: 5rem !important;
  width: 5rem !important;
}
</style>
