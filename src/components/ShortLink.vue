<template>
  <section class="shortlinks-section">
    <div class="container">
      <div class="shortlinks-section__box">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Shorten a link here..."
            aria-label="Shorten a link here..."
            aria-describedby="basic-addon2"
            v-model="linkToShort"
            v-validate="{ url: { require_protocol: true } }"
            data-vv-as="field"
            name="linkToShort"
            :class="{
              'form-control--error': errors && errors.first('linkToShort')
            }"
            id="shortInput"
            @keyup.enter="
              errors && errors.first('linkToShort')
                ? (linkToShort = null)
                : shortAndClear(linkToShort)
            "
          />
          <div class="shortlinks-section__error-message d-block d-md-none">
            {{ errors.first("linkToShort") }}
          </div>

          <div class="input-group-append">
            <button
              class="btn btn-secondary btn-secondary--submit"
              type="button"
              @click="
                linkToShort != null
                  ? shortAndClear(linkToShort)
                  : (linkToShort = null)
              "
              :disabled="errors && errors.first('linkToShort')"
            >
              Shorten It!
            </button>
          </div>
        </div>
        <div class="shortlinks-section__error-message d-none d-md-block">
          {{ errors.first("linkToShort") }}
        </div>
      </div>
      <ul class="px-0 shortlinks-section__list-container" v-if="urls.length">
        <li
          class="shortlinks-section__shortedlink"
          v-for="(url, index) in urls"
          :key="index"
          :id="index"
        >
          <a
            :href="url.url"
            class="shortlinks-section__shortedlink--original"
            target="_blank"
            >{{ url.url }}</a
          >
          <hr class="d-sm-block d-md-none" />
          <a
            :href="`https://rel.ink/${url.hashid}`"
            class="shortlinks-section__shortedlink--shorted"
            target="_blank"
            >https://rel.ink/{{ url.hashid }}</a
          >
          <div class="item">
            <button
              type="button"
              class="btn btn-secondary btn-secondary--copy shortlinks-section__shortedlink--btn item__value"
              v-clipboard:copy="`https://rel.ink/${url.hashid}`"
              @click="textOnCopy($event)"
            >
              Copy
            </button>
            <div class="item__delete" @click="removeItem(index)">
              <button class="item__delete--btn">
                <i class="ion-ios-close-outline"></i>
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "ShortLink",
  data: () => {
    return {
      linkToShort: null
    };
  },

  methods: {
    ...mapActions(["shortUrl", "removeItem"]),

    textOnCopy(event) {
      event.target.innerText = "Copied!";
      event.target.classList.add("btn-secondary--copy-active");

      setTimeout(() => {
        event.target.innerText = "Copy";
        event.target.classList.remove("btn-secondary--copy-active");
      }, 1500);
    },

    shortAndClear(link) {
      if (this.linkToShort) {
        this.shortUrl(link);
        this.clearValue();
      }
    },

    clearValue() {
      if (this.linkToShort) {
        this.linkToShort = null;
        document.getElementById("shortInput").value = "";
      }
    }
  },

  computed: {
    ...mapGetters(["urls"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../sass/abstracts/devices";

.item__value {
  transition: transform 0.3s;
}

.item__delete--btn {
  font-size: 22px;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  display: none;

  @media #{$break2},
  #{$break3},
  #{$break4} {
    margin-left: -21px;
  }
}

.item__delete--btn:focus {
  outline: none;
}

.item__delete--btn:active {
  transform: translateY(2px);
}

.item:hover .item__value {
  transform: translateX(-4px);
}

.item:hover .item__delete--btn {
  display: block;
}

.item {
  display: flex;
  align-items: center;
}
</style>
