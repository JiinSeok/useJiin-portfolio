// 통화 포맷 함수
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
    maximumFractionDigits: 0,
  }).format(amount)
}
// 백분율 포맷 함수
export const formatPercentage = (value: number): string => {
  return `${value.toFixed(1)}%`
}
