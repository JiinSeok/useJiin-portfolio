type Props = {
  message: string
  onClose: () => void
}

export const ErrorDialog = ({ message, onClose }: Props) => (
  <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
    <div className="bg-white rounded p-6 shadow-lg">
      <h2 className="font-bold text-lg">문제가 발생했어요</h2>
      <p className="mt-2">{message}</p>
      <button
        className="mt-4 px-4 py-2 bg-black text-white rounded"
        onClick={onClose}
      >
        닫기
      </button>
    </div>
  </div>
)
