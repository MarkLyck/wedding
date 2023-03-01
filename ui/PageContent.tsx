export const PageContent = ({ children }: { children: React.ReactNode }) => (
  <div className="flex justify-center px-8 pt-4 pb-8">
    <div className="flex w-full max-w-5xl flex-col bg-white p-8">
      {children}
    </div>
  </div>
)
