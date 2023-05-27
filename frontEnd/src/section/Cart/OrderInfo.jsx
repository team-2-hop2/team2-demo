import React from "react";

export const OrderInfo = (props) => {
  const { className } = props;
  return (
    <div>
      <div
        className={`w-[100%] bg-bgColor flex flex-col gap-10 justify-around px-3 py-10 rounded-xl mt-14 sm:w-[600px] lg:w-[550px] ${className}`}
      >
        <div>
          <div className="font-[Shantell] ">НЭР</div>
          <input
            className="w-[100%] h-[45px] rounded-lg pl-[20px]"
            placeholder="НЭР"
          />
        </div>
        <div>
          <div className="font-[Shantell] ">УТАС</div>
          <input
            className="w-[100%] h-[45px] rounded-lg pl-[20px]"
            placeholder="УТАС "
          />
        </div>
        <div className="flex justify-between">
          <div>
            <div className="font-[Shantell] ">ДҮҮРЭГ СОНГОХ</div>
            <select
              className="w-[170px] h-[30px] rounded-xl pl-[10px] sm:w-[250px] lg:w-[200px]"
            >
              <option>Дүүрэг сонгох</option>
              <option>Баянгол</option>
              <option>Сонгино хайрхан</option>
              <option>Хан-Уул</option>
              <option>Сүхбаатар</option>
              <option>Баянзүрх</option>
              <option>Чингэлтэй</option>
            </select>
          </div>
          <div>
            <div className="font-[Shantell] ">ХОРОО СОНГОХ</div>
            <select className="w-[170px] h-[30px] rounded-xl pl-[10px] sm:w-[250px] lg:w-[200px]">
              <option className="font-[Shantell]">Хороо сонгох</option>
              <option>1-р хороо</option>
              <option>2-р хороо</option>
              <option>3-р хороо</option>
              <option>4-р хороо</option>
              <option>5-р хороо</option>
              <option>6-р хороо</option>
              <option>7-р хороо</option>
              <option>8-р хороо</option>
              <option>9-р хороо</option>
              <option>10-р хороо</option>
              <option>11-р хороо</option>
              <option>12-р хороо</option>
              <option>13-р хороо</option>
              <option>14-р хороо</option>
              <option>15-р хороо</option>
              <option>16-р хороо</option>
              <option>17-р хороо</option>
              <option>18-р хороо</option>
              <option>19-р хороо</option>
              <option>20-р хороо</option>
              <option>21-р хороо</option>
              <option>22-р хороо</option>
              <option>23-р хороо</option>
              <option>24-р хороо</option>
              <option>25-р хороо</option>
              <option>26-р хороо</option>
              <option>27-р хороо</option>
              <option>28-р хороо</option>
              <option>29-р хороо</option>
              <option>30-р хороо</option>
              <option>31-р хороо</option>
              <option>32-р хороо</option>
            </select>
          </div>
        </div>
        <div>
          <div className="font-[Shantell] ">ХҮРГҮҮЛЭХ ХАЯГ</div>
          <input
            className="w-[100%] h-[45px] rounded-lg  pl-[20px]"
            placeholder="Хүргүүлэх хаяг"
          />
        </div>
        <div>
          <div className="font-[Shantell]">НЭМЭЛТ МЭДЭЭЛЭЛ</div>
          <textarea
            className="w-[100%] h-[60px] rounded-lg px-4 py-3"
            placeholder="Нэмэлт мэдээлэл"
            type="text"
          ></textarea>
        </div>
        {/* <div className="font-[Shantell] w-[100%] flex flex-col items-center gap-5 text-gray-600">
          <div>ХҮРГЭЛТИЙН НӨХЦӨЛ</div>
          <div className="w-[100%] pl-5 text-[15px]">
            Баталгаажсан захиалга дэлгүүрээс ирж авна. Дэлгүүр өдрийн
            11:00-19:00 цагийн хооронд ажиллана. Хүргэлт Ням гаригт хийгдэх
            боломжтой байна. Хөдөө орон нутагруу хүргэлт хийгдэхгүй. Хүргэлтээр
            очсон барааг буцаах, өөр төрлийн бараагаар солих боломжгүй.
          </div>
          <div>ТӨЛБӨРИЙН МЭДЭЭЛЭЛ</div>
          <div className="w-[100%] pl-5 text-[15px]">
            Голомт Банк 3005154045 “Terskhen ХХК” тоот данс / Гүйлгээний утга
            дээр зөвхөн захиалгын КОД , Утасны дугаараа бичиж төлбөрийг
            шилжүүлэх/ Төлбөр хийгдээгүй тохиолдолд захиалга цуцлагдахыг
            анхаарна уу.
          </div>
        </div> */}
        <div className="w-100% flex justify-center">
          <button className="bg-pink font-[Shantell] w-[350px] sm:w-[500px] rounded-[10px] justify-center hover:bg-bgColor border-solid border-pink border-2">
            Үргэжлүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};
