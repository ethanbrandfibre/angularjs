/**
 * Created by ethan on 2014/7/25.
 */

describe("Services Test", function () {
    //Arrange
    var services;
    beforeEach(angular.mock.module("digitGenServices"));
    beforeEach(angular.mock.inject(function (digitGenServices) {
        services = digitGenServices;
    }));

    //Assertions
    it("test isConsDigs", function () {
        expect(services.isConsDigs("")).toEqual(true);
        expect(services.isConsDigs("1678")).toEqual(true);
        expect(services.isConsDigs("1122")).toEqual(false);
        expect(services.isConsDigs("1672342354234234232348")).toEqual(true);//test more than 4 digits
        expect(services.isConsDigs("ab")).toEqual(true);//equals to true because of invalid format
    });

    it("test isDupDigs", function () {
        expect(services.isDupDigs("")).toEqual(true);
        expect(services.isDupDigs("1678", 0)).toEqual(false);
        expect(services.isDupDigs("1122", 0)).toEqual(true);
        expect(services.isDupDigs("1122")).toEqual(true);
        expect(services.isDupDigs("1682")).toEqual(false);
        expect(services.isDupDigs("1122", -1)).toEqual(true);
        expect(services.isDupDigs("1682", -1)).toEqual(false);
        expect(services.isDupDigs("1672342354234234232348", 0)).toEqual(true);//test more than 4 digits
        expect(services.isDupDigs("abc")).toEqual(true);//equals to true because of invalid format
    });

    it("test isConsDigs", function () {
        var emptyArray = [];
        var shortArray = ["1236", "2938", "3841", "3847"];
        var longArray = ["6041", "7918", "0432", "5728", "0814", "4930", "9410", "3409", "1956", "7319", "3215", "9167", "1895", "7325", "5629", "8457", "9615", "5201", "9514", "5406", "4301", "2598", "9360", "2903", "4531", "7536", "5216", "6945", "7904", "5683", "0362", "9618", "9481", "9716", "7589", "2364", "8450", "1690", "3804", "0847", "6013", "1653", "6820", "0683", "0461", "0512", "4650", "9605", "6531", "0893", "0753", "3950", "1403", "4697", "8276", "9746", "9428", "9674", "7036", "1852", "7186", "1829", "3046", "8067", "4692", "8401", "5376", "6093", "2640", "7581", "8702", "4823", "1908", "1679", "0148", "5062", "2160", "6470", "1962", "7421", "5429", "0485", "5382", "2175", "9026", "4769", "9248", "2056", "8396", "6417", "0468", "9487", "5374", "8293", "0452", "7028", "4381", "3486", "4360", "5731", "1043"];
        expect(services.isDigitExist("1678", emptyArray)).toEqual(false);
        expect(services.isDigitExist("1678", shortArray)).toEqual(false);
        expect(services.isDigitExist("1236", shortArray)).toEqual(true);
        expect(services.isDigitExist("6041", longArray)).toEqual(true);
        expect(services.isDigitExist("1111", longArray)).toEqual(false);
        expect(services.isDigitExist("aa", shortArray)).toEqual(true);//equals to true because of invalid format
    });

});