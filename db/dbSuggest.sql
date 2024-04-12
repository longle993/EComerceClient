create table LoaiSanPham
(
	IdLoaiSP varchar(10) primary key,
	LoaiSP nvarchar(70)
)

create table SanPham
(
	IdSanPham varchar(10) primary key,
	TenSanPham nvarchar(200),
	IdLoaiSP varchar(10) foreign key references LoaiSanPham(IdLoaiSP),
	GiaSP decimal
)
create table HinhAnhSanPham
(
	IdHinhAnh varchar(10) primary key,
	IdSanPham varchar(10) foreign key references SanPham(IdSanPham),
	HinhAnh varchar(300)
)

---Insert LoaiSanPham
insert into LoaiSanPham values('Loai01', N'Điện thoại')
insert into LoaiSanPham values('Loai02', N'Laptop')
insert into LoaiSanPham values('Loai03', N'Đồng hồ')
insert into LoaiSanPham values('Loai04', N'Phụ kiện')
insert into LoaiSanPham values('Loai05', N'Tablet')


---Insert SanPham Phone
insert into SanPham values ('SP001', N'iPhone 15 Pro Max','Loai01',15000000)
insert into SanPham values ('SP002', N'Samsung Galaxy S24 5G','Loai01',20000000)
insert into SanPham values ('SP003', N'Oppo Reno 11 5G','Loai01',8000000)
insert into SanPham values ('SP004', N'Xiaomi Redmi Note 13 Pro','Loai01',12000000)
insert into SanPham values ('SP005', N'Vivo Y03','Loai01',5000000)
insert into SanPham values ('SP006', N'Realme C67','Loai01',6000000)

---Insert SanPham Laptop
insert into SanPham values ('SP007', N'Laptop Acer Aspire 3','Loai02',18000000)
insert into SanPham values ('SP008', N'Laptop HP 15s fq5229TU','Loai02',16000000)
insert into SanPham values ('SP009', N'Laptop Apple MacBook Air 13 inch M1 2020','Loai02',19000000)
insert into SanPham values ('SP010', N'Laptop MSI Modern 15 B12MO','Loai02',21000000)
insert into SanPham values ('SP011', N'Laptop Dell Inspiron 15 3520','Loai02',12000000)
insert into SanPham values ('SP012', N'Laptop Lenovo IdeaPad 1 15AMN7 R5','Loai02',23000000)

---Insert SanPham Watch
insert into SanPham values ('SP013', N'Xiaomi Watch S3','Loai03',3000000)
insert into SanPham values ('SP014', N'Apple Watch Series 9','Loai03',8000000)
insert into SanPham values ('SP015', N'Kidcare S88 4G','Loai03',2000000)
insert into SanPham values ('SP016', N'Garmin Lily 2','Loai03',1200000)
insert into SanPham values ('SP017', N'BeFit B3','Loai03',800000)
insert into SanPham values ('SP018', N'Amazfit Cheetah Square','Loai03',4500000)

--Insert SanPham Phu kien
insert into SanPham values ('SP019', N'AVA+ 12W JP299','Loai04',450000)
insert into SanPham values ('SP020', N'Xmobile 20W Y73','Loai04',300000)
insert into SanPham values ('SP021', N'Miếng dán camera iPhone 15 Pro Max OPTIX ALUMINIUM UNIQ','Loai04',120000)
insert into SanPham values ('SP022', N'Loa Bluetooth JBL Partybox Encore 2Mic','Loai04',1650000)
insert into SanPham values ('SP023', N'Loa Bluetooth JBL Partybox 110','Loai04',1550000)
insert into SanPham values ('SP024', N'Loa Bluetooth Klipsch GIG XL','Loai04',960000)

--Insert SanPham tablet
insert into SanPham values ('SP025', N'OPPO Pad Neo WiFi','Loai05',6690000)
insert into SanPham values ('SP026', N'Samsung Galaxy Tab A9+','Loai05',5190000)
insert into SanPham values ('SP027', N'Honor Pad X9','Loai05',4590000)
insert into SanPham values ('SP028', N'Lenovo Tab M9','Loai05',4490000)
insert into SanPham values ('SP029', N'Lenovo Tab M8 (Gen 4)','Loai05',3990000)
insert into SanPham values ('SP030', N'Xiaomi Redmi Pad SE','Loai05',5490000)

--Insert HinhAnhSP Dienthoai
insert into HinhAnhSanPham values('H001','SP001','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP001%2Fiphone1.jpg?alt=media&token=2d3cf698-c8a8-4bb6-a0c2-f0f8399f2da1')
insert into HinhAnhSanPham values('H002','SP001','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP001%2Fiphone2.webp?alt=media&token=69bb3e89-5aa9-46ea-aa32-1228f56f9acc')
insert into HinhAnhSanPham values('H003','SP001','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP001%2Fiphone3.webp?alt=media&token=55e05860-2cb0-4362-93f2-9cbbe2a8c329')
insert into HinhAnhSanPham values('H004','SP001','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP001%2Fiphone4.jpg?alt=media&token=3ab85dc3-028c-44a3-9dcd-d22aa4f470e5')
insert into HinhAnhSanPham values('H005','SP001','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP001%2Fiphone5.webp?alt=media&token=210d4ca8-3b89-4e11-aebf-f22aaff23a34')

insert into HinhAnhSanPham values('H006','SP002','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP002%2Fsamsung1.jpg?alt=media&token=4ac4e9ae-0fb4-442e-b297-8d7f3b0e97ac')
insert into HinhAnhSanPham values('H007','SP002','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP002%2Fsamsung2.png?alt=media&token=501e2e91-2633-43ef-9c21-2e1e5f3cbab9')
insert into HinhAnhSanPham values('H008','SP002','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP002%2Fsamsung3.jpg?alt=media&token=3fe11736-f26b-43c6-8004-b01bdfa08c40')
insert into HinhAnhSanPham values('H009','SP002','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP002%2Fsamsung4.jpg?alt=media&token=c98f364f-e475-4bde-8960-736790403814')
insert into HinhAnhSanPham values('H010','SP002','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP002%2Fsamsung5.jpeg?alt=media&token=ee62404a-96b7-4d6e-b678-072adeade4dc')

insert into HinhAnhSanPham values('H011','SP003','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP003%2Foppo1.jpg?alt=media&token=ff0f102e-e2c3-43af-bc74-b700b434d421')
insert into HinhAnhSanPham values('H012','SP003','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP003%2Foppo2.png?alt=media&token=1e6831cf-146a-4532-9678-acc673c313ba')
insert into HinhAnhSanPham values('H013','SP003','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP003%2Foppo3.webp?alt=media&token=6b06585c-1b88-404e-a5e2-90aa0aba6d78')
insert into HinhAnhSanPham values('H014','SP003','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP003%2Foppo4.jpg?alt=media&token=516eeeef-5af3-4c00-a5e4-bfedecdb1b82')
insert into HinhAnhSanPham values('H015','SP003','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP003%2Foppo5.jpg?alt=media&token=062f2da3-4b67-4abc-be3c-11551ac4ac76')

insert into HinhAnhSanPham values('H016','SP004','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP004%2Fxiaomi1.webp?alt=media&token=aa30b242-604a-4179-ba09-8b2583eee686')
insert into HinhAnhSanPham values('H017','SP004','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP004%2Fxiaomi2.webp?alt=media&token=a852d48c-7021-4bc8-ba78-4fc7aed3e6e4')
insert into HinhAnhSanPham values('H018','SP004','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP004%2Fxiaomi3.jpeg?alt=media&token=1807b647-f8a8-439d-a9e5-0812b50c318c')
insert into HinhAnhSanPham values('H019','SP004','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP004%2Fxiaomi4.jpeg?alt=media&token=f311954d-3f08-4c3c-8498-c512bb409adb')
insert into HinhAnhSanPham values('H020','SP004','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP004%2Fxiaomi5.jpeg?alt=media&token=22bed769-ded3-479b-9505-e157980ce6ff')

insert into HinhAnhSanPham values('H021','SP005','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP005%2Fvivo1.jpg?alt=media&token=c0c58d67-7f32-4c83-b258-e444cc73f4dd')
insert into HinhAnhSanPham values('H022','SP005','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP005%2Fvivo2.jpg?alt=media&token=3c779aec-c5f9-4e13-ab24-ec364c279879')
insert into HinhAnhSanPham values('H023','SP005','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP005%2Fvivo3.jpeg?alt=media&token=ebf77905-e771-429d-9208-1a1dc7abb81e')
insert into HinhAnhSanPham values('H024','SP005','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP005%2Fvivo4.webp?alt=media&token=9306b107-e35c-4525-89ce-cda3ac66d3fc')
insert into HinhAnhSanPham values('H025','SP005','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP005%2Fvivo5.jpg?alt=media&token=930aa854-59fe-4307-a4ff-233289463043')

insert into HinhAnhSanPham values('H026','SP006','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP006%2Frealme1.jpg?alt=media&token=760f1c54-8e4a-4dcb-a945-d13af1b6e031')
insert into HinhAnhSanPham values('H027','SP006','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP006%2Frealme2.jpeg?alt=media&token=d8ed2910-8433-46d5-b6a3-d6ffd0be0a18')
insert into HinhAnhSanPham values('H028','SP006','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP006%2Frealme3.jpeg?alt=media&token=7e594563-1f0f-47fd-accf-a4cc21535467')
insert into HinhAnhSanPham values('H029','SP006','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP006%2Frealme4.jpeg?alt=media&token=a2bb95da-1d7b-4471-9453-c21e98018690')
insert into HinhAnhSanPham values('H030','SP006','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP006%2Frealme5.jpeg?alt=media&token=9a5b0c48-54e4-4798-a06e-45404263d4ed')

--Insert HinhAnhSP Laptop
insert into HinhAnhSanPham values('H031','SP007','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP007%2Facer1.jpg?alt=media&token=14d99272-6e32-4bbb-bbce-53d4480804b2')
insert into HinhAnhSanPham values('H032','SP007','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP007%2Facer2.jpeg?alt=media&token=b9977f18-352f-450f-981c-e515e72e75ee')
insert into HinhAnhSanPham values('H033','SP007','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP007%2Facer3.jpeg?alt=media&token=9659a385-f4f6-45fb-9544-9c3e5c8c7d18')
insert into HinhAnhSanPham values('H034','SP007','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP007%2Facer4.jpeg?alt=media&token=648b4a0e-ad35-40d0-8d48-12ec4f47fcbf')
insert into HinhAnhSanPham values('H035','SP007','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP007%2Facer5.jpeg?alt=media&token=74c2c7cc-84f0-4510-b306-25a18ae802e6')

insert into HinhAnhSanPham values('H036','SP008','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP008%2Fhp1.png?alt=media&token=a4943faa-fb39-4aa4-9dcd-3e1e5924feb8')
insert into HinhAnhSanPham values('H037','SP008','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP008%2Fhp2.jpeg?alt=media&token=04f57d77-0202-4280-867f-56f848a82940')
insert into HinhAnhSanPham values('H038','SP008','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP008%2Fhp3.jpeg?alt=media&token=a2606fe6-82cd-4d09-8fdf-45f80cc2dc0d')
insert into HinhAnhSanPham values('H039','SP008','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP008%2Fhp4.jpeg?alt=media&token=4e6038d5-6c8c-4696-8e77-f4874b43dee9')
insert into HinhAnhSanPham values('H040','SP008','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP008%2Fhp5.jpeg?alt=media&token=9a6e0305-fa50-472f-abff-53a4ecc8c179')

insert into HinhAnhSanPham values('H041','SP009','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP009%2Fmac1.jpeg?alt=media&token=c445651a-f894-4f42-b3ce-67f9d82599db')
insert into HinhAnhSanPham values('H042','SP009','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP009%2Fmac2.jpeg?alt=media&token=ae30a94f-5daa-4114-b79c-f61d970777df')
insert into HinhAnhSanPham values('H043','SP009','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP009%2Fmac3.jpeg?alt=media&token=4e2c48d2-3b46-471c-8bb9-0273e570feeb')
insert into HinhAnhSanPham values('H044','SP009','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP009%2Fmac4.jpeg?alt=media&token=ff981b5b-5bb2-4a50-ad73-008a7d28ece3')
insert into HinhAnhSanPham values('H045','SP009','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP009%2Fmac5.jpeg?alt=media&token=fd611762-e93c-4cab-8c80-6b49244e04a0')

insert into HinhAnhSanPham values('H046','SP010','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP010%2Fmsi1.jpg?alt=media&token=00a66246-9402-4d66-997c-4693326cd2f6')
insert into HinhAnhSanPham values('H047','SP010','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP010%2Fmsi2.jpg?alt=media&token=be268034-213a-4fc2-a979-ce4a8a6da5aa')
insert into HinhAnhSanPham values('H048','SP010','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP010%2Fmsi3.jpeg?alt=media&token=884ece0a-4fdc-4b58-b30b-e76c8f2b9564')
insert into HinhAnhSanPham values('H049','SP010','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP010%2Fmsi4.jpeg?alt=media&token=1c64b0dc-3315-4968-806b-d4cd01b1a3f5')	
insert into HinhAnhSanPham values('H050','SP010','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP010%2Fmsi5.jpeg?alt=media&token=5b20d6dd-5a15-4d0a-a7a7-59c95bba7323')

insert into HinhAnhSanPham values('H051','SP011','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP011%2Fdell1.jpeg?alt=media&token=c50101b1-0318-4a4c-9ce3-334e751e5df7')
insert into HinhAnhSanPham values('H052','SP011','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP011%2Fdell2.jpeg?alt=media&token=c77e9b90-1f57-40e2-85bc-f10983051ee4')
insert into HinhAnhSanPham values('H053','SP011','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP011%2Fdell3.jpeg?alt=media&token=d6d00e88-3a30-417b-903e-adc75d84e269')
insert into HinhAnhSanPham values('H054','SP011','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP011%2Fdell4.jpeg?alt=media&token=b2f37480-3905-49f8-93e3-2f18a390e6a6')
insert into HinhAnhSanPham values('H055','SP011','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP011%2Fdell5.jpeg?alt=media&token=6291632d-3665-4d93-a7c6-164f335c50c1')

insert into HinhAnhSanPham values('H056','SP012','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP012%2Flenovo1.jpeg?alt=media&token=d527dc62-4489-4fb2-a418-d2f71eb8f703')
insert into HinhAnhSanPham values('H057','SP012','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP012%2Flenovo2.jpeg?alt=media&token=6830a2cf-b91d-472d-99b4-4a5d6a391c1e')
insert into HinhAnhSanPham values('H058','SP012','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP012%2Flenovo3.jpeg?alt=media&token=e71a1594-364d-496c-a182-05a3aabea224')
insert into HinhAnhSanPham values('H059','SP012','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP012%2Flenovo4.jpeg?alt=media&token=e06ce0a5-48a2-473d-8e46-2bf6d65ceeab')
insert into HinhAnhSanPham values('H060','SP012','https://firebasestorage.googleapis.com/v0/b/websuggest-c8ae4.appspot.com/o/SP012%2Flenovo5.jpeg?alt=media&token=a82ae97a-06c9-4043-a5d0-092c409f587e')

--Insert HinhAnhSP Watch
insert into HinhAnhSanPham values('H091','SP013','')
insert into HinhAnhSanPham values('H092','SP013','')
insert into HinhAnhSanPham values('H093','SP013','')
insert into HinhAnhSanPham values('H094','SP013','')
insert into HinhAnhSanPham values('H095','SP013','')

insert into HinhAnhSanPham values('H096','SP014','')
insert into HinhAnhSanPham values('H097','SP014','')
insert into HinhAnhSanPham values('H098','SP014','')
insert into HinhAnhSanPham values('H099','SP014','')
insert into HinhAnhSanPham values('H100','SP014','')

insert into HinhAnhSanPham values('H101','SP015','')
insert into HinhAnhSanPham values('H102','SP015','')
insert into HinhAnhSanPham values('H103','SP015','')
insert into HinhAnhSanPham values('H104','SP015','')
insert into HinhAnhSanPham values('H105','SP015','')

insert into HinhAnhSanPham values('H106','SP016','')
insert into HinhAnhSanPham values('H107','SP016','')
insert into HinhAnhSanPham values('H108','SP016','')
insert into HinhAnhSanPham values('H109','SP016','')	
insert into HinhAnhSanPham values('H110','SP016','')

insert into HinhAnhSanPham values('H111','SP017','')
insert into HinhAnhSanPham values('H112','SP017','')
insert into HinhAnhSanPham values('H113','SP017','')
insert into HinhAnhSanPham values('H114','SP017','')
insert into HinhAnhSanPham values('H115','SP017','')

insert into HinhAnhSanPham values('H116','SP018','')
insert into HinhAnhSanPham values('H117','SP018','')
insert into HinhAnhSanPham values('H118','SP018','')
insert into HinhAnhSanPham values('H119','SP018','')
insert into HinhAnhSanPham values('H120','SP018','')

--Insert HinhAnhSP Phukien
insert into HinhAnhSanPham values('H121','SP019','')
insert into HinhAnhSanPham values('H122','SP019','')
insert into HinhAnhSanPham values('H123','SP019','')
insert into HinhAnhSanPham values('H124','SP019','')
insert into HinhAnhSanPham values('H125','SP019','')

insert into HinhAnhSanPham values('H126','SP020','')
insert into HinhAnhSanPham values('H127','SP020','')
insert into HinhAnhSanPham values('H128','SP020','')
insert into HinhAnhSanPham values('H129','SP020','')
insert into HinhAnhSanPham values('H130','SP020','')

insert into HinhAnhSanPham values('H131','SP021','')
insert into HinhAnhSanPham values('H132','SP021','')
insert into HinhAnhSanPham values('H133','SP021','')
insert into HinhAnhSanPham values('H134','SP021','')
insert into HinhAnhSanPham values('H135','SP021','')

insert into HinhAnhSanPham values('H136','SP022','')
insert into HinhAnhSanPham values('H137','SP022','')
insert into HinhAnhSanPham values('H138','SP022','')
insert into HinhAnhSanPham values('H139','SP022','')	
insert into HinhAnhSanPham values('H140','SP022','')

insert into HinhAnhSanPham values('H141','SP023','')
insert into HinhAnhSanPham values('H142','SP023','')
insert into HinhAnhSanPham values('H143','SP023','')
insert into HinhAnhSanPham values('H144','SP023','')
insert into HinhAnhSanPham values('H145','SP023','')

insert into HinhAnhSanPham values('H146','SP024','')
insert into HinhAnhSanPham values('H147','SP024','')
insert into HinhAnhSanPham values('H148','SP024','')
insert into HinhAnhSanPham values('H149','SP024','')
insert into HinhAnhSanPham values('H150','SP024','')

--Insert HinhAnhSP Tablet
insert into HinhAnhSanPham values('H061','SP025','')
insert into HinhAnhSanPham values('H062','SP025','')
insert into HinhAnhSanPham values('H063','SP025','')
insert into HinhAnhSanPham values('H064','SP025','')
insert into HinhAnhSanPham values('H065','SP025','')

insert into HinhAnhSanPham values('H066','SP026','')
insert into HinhAnhSanPham values('H067','SP026','')
insert into HinhAnhSanPham values('H068','SP026','')
insert into HinhAnhSanPham values('H069','SP026','')
insert into HinhAnhSanPham values('H070','SP026','')

insert into HinhAnhSanPham values('H071','SP027','')
insert into HinhAnhSanPham values('H072','SP027','')
insert into HinhAnhSanPham values('H073','SP027','')
insert into HinhAnhSanPham values('H074','SP027','')
insert into HinhAnhSanPham values('H075','SP027','')

insert into HinhAnhSanPham values('H076','SP028','')
insert into HinhAnhSanPham values('H077','SP028','')
insert into HinhAnhSanPham values('H078','SP028','')
insert into HinhAnhSanPham values('H079','SP028','')	
insert into HinhAnhSanPham values('H080','SP028','')

insert into HinhAnhSanPham values('H081','SP029','')
insert into HinhAnhSanPham values('H082','SP029','')
insert into HinhAnhSanPham values('H083','SP029','')
insert into HinhAnhSanPham values('H084','SP029','')
insert into HinhAnhSanPham values('H085','SP029','')

insert into HinhAnhSanPham values('H086','SP030','')
insert into HinhAnhSanPham values('H087','SP030','')
insert into HinhAnhSanPham values('H088','SP030','')
insert into HinhAnhSanPham values('H089','SP030','')
insert into HinhAnhSanPham values('H090','SP030','')