import AccountHeader from "../components/account/AccountHeader"
import AccountSection from "../components/account/AccountSection"
import DangerZone from "../components/account/DangerZone"

export default function Account() {
  return (
    <div className="min-h-screen bg-[#05070c] text-white overflow-y-auto scroll-smooth">
      <AccountHeader />

      <div className="max-w-6xl mx-auto px-10 py-14 space-y-10">
        <AccountSection
          title="Name"
          description="Do not change your name frequently"
          value="Karan Yadav"
          type="text"
          button="Update"
        />

        <AccountSection
          title="Email"
          description="Do not change your email frequently"
          value="karanpandit786@gmail.com"
          type="email"
          button="Update"
        />

        <AccountSection
          title="Password"
          description="Change your password frequently to keep your account secure"
          value="************"
          type="password"
          button="Update"
        />

        <DangerZone />
      </div>

      <footer className="border-t border-white/10 px-10 py-6 text-sm text-gray-400 flex justify-between">
        <span>© 2026 Zap Auth. All Rights Reserved</span>
        <span>Version 1.0.2</span>
      </footer>
    </div>
  )
}
