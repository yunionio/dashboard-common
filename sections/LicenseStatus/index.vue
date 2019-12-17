<template>
  <a-alert
    v-if="isAdminMode && showLicenseTips"
    type="warning"
    :message="licenseTips"
    closable
    showIcon
    @close="closeLicenseTips" />
</template>

<script>
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'
import { Manager } from '@/utils/manager'

const R = require('ramda')

export default {
  data () {
    return {
      showLicenseTips: false,
      licenseTips: '',
      licenseStatus: 'gray',
    }
  },
  computed: {
    ...mapGetters([
      'companyInfo',
      'isAdminMode',
    ]),
    email () {
      if (!R.isNil(this.companyInfo.email) && !R.isEmpty(this.companyInfo.email)) {
        return this.companyInfo.email
      }
      return null
    },
  },
  created () {
    this.initLicenseStatus()
  },
  methods: {
    initLicenseStatus () {
      if (!this.isAdminMode) {
        return
      }
      let manager = new Manager('licenses', 'v1')
      manager.get({ id: 'compute/status' }).then((res) => {
        let status = res.data
        if (status) {
          let now = new Date()
          // 剩余天数
          let days = (status.expire - now.getTime() / 1000) / 24 / 3600
          if (status.expired) {
            // 已过期
            this.licenseStatus = 'red'
            this.licenseTips = `您的授权证书已过期，如您需要升级到其它版本或更新许可证，请将您的服务器识别码和升级需求发送电子邮件至 ${this.email} ，我们将尽快与您联系！`
          } else if (status.exceeded) {
            // 超过配额
            this.licenseStatus = 'red'
            this.licenseTips = `您的授权CPU配额已到达上限，如您需要升级到其它版本或更新许可证，请将您的服务器识别码和升级需求发送电子邮件至 ${this.email} ，我们将尽快与您联系！`
          } else if (status.expire > 0 && days < 30) {
            //  即将过期
            this.licenseStatus = 'darkorange'
            this.licenseTips = `您的授权证书即将过期，如您需要升级到其它版本或更新许可证，请将您的服务器识别码和升级需求发送电子邮件至 ${this.email} ，我们将尽快与您联系！`
          } else if ((status.usage / status.limit) > 0.9) {
            // 即将超出配额
            this.licenseStatus = 'darkorange'
            this.licenseTips = `您的授权CPU配额即将到达上限，如您需要升级到其它版本或更新许可证，请将您的服务器识别码和升级需求发送电子邮件至 ${this.email} ，我们将尽快与您联系！`
          } else {
            // license 正常
            this.licenseStatus = 'gray'
          }
        } else {
          // 无法正常获取license状态
          this.licenseStatus = 'gray'
        }

        if (this.licenseStatus === 'green' || this.licenseStatus === 'gray') {
          this.showLicenseTips = false
        } else {
          let t = Cookies.get('lastTipTime')
          let now = new Date().getTime()
          // 如果上次提醒大于一天则提示
          this.showLicenseTips = t ? now - t > 3600 * 24 * 1000 : true
        }
      }).catch((e) => {
        // 无法正常获取license状态
        this.licenseStatus = 'gray'
        this.showLicenseTips = false
      })
    },
    closeLicenseTips () {
      let now = new Date().getTime()
      // cookie一天有效
      Cookies.set('lastTipTime', now, {
        expires: 1,
      })
      this.showLicenseTips = false
    },
  },
}
</script>
