import type React from "react"
export default function ChallengeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="min-h-screen bg-gray-50">{children}</main>
}
