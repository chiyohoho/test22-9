const callElement = (id) => {
    return document.querySelector(id)
}
// -----------DOM ELEMENT
const contentKetQua = callElement("#content_ketqua")
const showKetQua = callElement("#showKetQua")
// -----------ARRAY NUMBER
let numberList = [
    {
        number: 33
    },
    {
        number: 14
    },
    {
        number: 26
    },
    {
        number: 12
    },
    {
        number: 13
    },
    {
        number: 7
    },
    {
        number: 9
    },
    {
        number: 10
    },
    {
        number: 102
    },
    {
        number: 205
    },
    {
        number: 379
    },
    {
        number: 418
    },
    {
        number: 1
    },

]
// -----------FUNCTION Sort Low to High
const sortLowToHigh = () => {
    numberList.sort((a, b) => {
        return a.number - b.number
    })

    let numberAfterSort = numberList.map(item => {
        return item.number
    })
    contentKetQua.textContent = `Kết quả của bạn là : ${numberAfterSort}`
}
// -----------FUNCTION Sort High to Low
const sortHighToLow = () => {
    numberList.sort((a, b) => {
        return b.number - a.number
    })

    let numberAfterSort = numberList.map(item => {
        return item.number
    })
    contentKetQua.textContent = `Kết quả của bạn là : ${numberAfterSort}`
}
// -----------FUNCTION chia hết cho 2 và xếp từ bé đến lớn
const sortChiaHetCho2 = () => {
    let newArray = []
    numberList.map((item) => {
        if (item.number % 2 === 0) {
            newArray.push(item)
        }
    })

    newArray.sort((a, b) => {
        return a.number - b.number
    })

    let numberAfterSort = newArray.map((item) => {
        return item.number
    })
    contentKetQua.textContent = `Kết quả của bạn là : ${numberAfterSort}`
}
// -----------FUNCTION không chia hết cho 2 và xếp từ lớn đến bé
const sortKoChiaHetCho2 = () => {
    let newArray = []
    numberList.map((item) => {
        if (item.number % 2 !== 0) {
            newArray.push(item)
        }
    })

    newArray.sort((a, b) => {
        return b.number - a.number
    })

    let numberAfterSort = newArray.map((item) => {
        return item.number
    })
    contentKetQua.textContent = `Kết quả của bạn là : ${numberAfterSort}`
}
// -----------FUNCTION tính tổng các số trong hàm
const tinhTongCacSo = () => {
    let tong = 0
    numberList.map((item) => {
        tong += item.number
        return tong
    })
    showKetQua.textContent = `Kết quả của bạn là : ${tong}`
}
// -----------FUNCTION tìm số lớn nhất trong hàm
const timSoLonNhat = () => {
    let number = numberList[0]
    numberList.map((item) => {
        if (number.number < item.number) {
            number = item
        }
    })
    numberList = [number]
    let soLonNhat = numberList.map(item => {
        return item.number
    })
    showKetQua.textContent = `Kết quả của bạn là : ${soLonNhat}`

}
// -----------FUNCTION tìm số bé nhất trong hàm
const timSoBeNhat = () => {
    let number = numberList[0]
    numberList.map((item) => {
        if (number.number > item.number) {
            number = item
        }
    })
    numberList = [number]
    let soBeNhat = numberList.map(item => {
        return item.number
    })
    showKetQua.textContent = `Kết quả của bạn là : ${soBeNhat}`

}
// -----------FUNCTION tìm số bé thứ hai trong hàm
const timSoBeThuHai = () => {
    numberList.sort((a, b) => {
        return a.number - b.number
    })

    let number = numberList[1].number
    showKetQua.textContent = `Kết quả của bạn là : ${number}`
}





