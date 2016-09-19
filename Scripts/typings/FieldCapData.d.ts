/// <reference path="../../app/enums/unitschematype.ts" />

// ReSharper disable InconsistentNaming
declare module Models
{
    export class ActivityLogCustomValueModel extends BaseModel
    {
        constructor();

        public ActivityLogCustomValueId: string;
        public ActivityLogId: string;
        public KeyName: string;
        public Value: string;

        public ActivityLog: ActivityLogModel;
    }

    export class ActivityLogItemModel extends BaseModel
    {
        constructor();

        public ActivityLogItemId: string;
        public ActivityLogId: string;
        public ItemId: number;
        public Comment: string;
        public Quantity: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;

        public ActivityLog: ActivityLogModel;
        public Item: ItemModel;
    }

    export class ActivityLogModel extends BaseModel
    {
        constructor();

        public ActivityLogId: string;
        public Comments: string;
        public StartDateTime: number;
        public EndDateTime: number;
        public ActionCodeId: number;
        public NptTypeCodeId: number;
        public ClientJobId: number;
        public TicketId: string;
        public ToolAssemblyId: string;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;
        public AttachmentFileName: string;

        // Local only, not in DB
        public Content: string;

        public ActionCode: SystemTypeModel;
        public ClientJob: ClientJobModel;
        public NptTypeCode: SystemTypeModel;
        public Ticket: TicketModel;
        public ToolAssembly: ToolAssemblyModel;

        public ActivityLogItems: ActivityLogItemModel[];
        public ActivityLogCustomValues: ActivityLogCustomValueModel[];
    }

    export class ApprovalModel extends BaseModel
    {
        constructor();

        public ApprovalId: string;
        public TicketId: string;
        public InvoiceId: string;
        public ExportedInvoiceId: string;
        public Date: number;
        public Total: number;
        public Version: number;
        public ApprovedBy: string;
        public ApprovalType: number;
        public CopySentTo: string;
        public Comments: string;

        public Content: string;
        public OverrideReplyToId: number;

        public Ticket: TicketModel;
        public Invoice: TicketModel;
        public ExportedInvoice: InvoiceModel;
    }

    export class BusinessPartnerLocationModel extends BaseModel
    {
        constructor();

        public BusinessPartnerLocationId: number;
        public BusinessPartnerId: number;
        public Address1: string;
        public Address2: string;
        public Address3: string;
        public PostalCode: string;
        public City: string;
        public County: string;
        public Country: string;
        public State: string;
        public TaxCode: string;
        public SurfaceLsd: string;
        public SurfaceLat: string;
        public SurfaceLng: string;
        public BottomHoleLsd: string;
        public BottomHoleLat: string;
        public BottomHoleLng: string;
        public ParentBusinessPartnerLocationId: number;

        public BusinessPartner: BusinessPartnerModel;
        public ParentBusinessPartnerLocation: BusinessPartnerLocationModel;

        public ClientJobs: ClientJobModel[];
        public Tickets: TicketModel[];
    }

    export class BusinessPartnerExtension
    {
        public BusinessPartnerId: number;
        public LastActivityDate: number;
        public LastTicketId: string;
    }

    export class BusinessPartnerModel extends BaseModel
    {
        constructor();

        public BusinessPartnerId: number;
        public BusinessPartnerName: string;
        public Phone: string;
        public Address: string;
        public City: string;
        public PostalCode: string;
        public Province: string;
        public Country: string;
        public ContactName: string;
        public ContactPhone: string;
        public ContactEmail: string;
        public CompanyType: string;
        public DefaultPriceListId: number;
        public DefaultTaxId: string;
        public DefaultPaymentTermId: number;
        public IsActive: boolean;
        public AccountingCode: string;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public DefaultPriceList: PriceListModel;

        public Extension: BusinessPartnerExtension;

        public BusinessPartnerLocations: BusinessPartnerLocationModel[];
        public ClientDiscounts: ClientDiscountModel[];
        public ClientJobs: ClientJobModel[];
        public Contacts: ContactModel[];
        public Invoices: InvoiceModel[];
        public ItemPartnerPrices: ItemPartnerPriceModel[];
        public ItemPeriodPrices: ItemPeriodPriceModel[];
        public PurchasesVendor: PurchaseModel[];
        public DefaultPaymentTerm: SystemTypeModel;
        public DefaultTax: TaxModel;
    }

    export class ClientDiscountModel extends BaseModel
    {
        constructor();

        public ClientDiscountId: number;
        public ClientId: number;
        public ObjType: string;
        public ObjKey: string;
        public Discount: number;

        public BusinessPartner: BusinessPartnerModel;
    }

    export class ClientJobCustomValueModel extends BaseModel
    {
        constructor();

        public ClientJobCustomValueId: string;
        public ClientJobId: number;
        public KeyName: string;
        public Value: string;

        public ClientJob: ClientJobModel;
    }

    export class ClientJobModel extends BaseModel
    {
        constructor();

        public ClientJobId: number;
        public ClientId: number;
        public ClientJobName: string;
        public JobCode: string;
        public ContactId: number;
        public AreaId: number;
        public SiteId: number;
        public Description: string;
        public Billable: boolean;
        public JobType: string;
        public JobStatusId: number;
        public OverrideClientId: number;
        public ParentJobId: number;
        public StartDate: number;
        public EndDate: number;
        public PlannedStartDate: number;
        public PlannedEndDate: number;
        public ContactName: string;
        public ContactPhone: string;
        public ContactEmail: string;
        public ClientJobAddress: string;
        public ClientJobAddressStateProv: string;
        public PriceListId: number;
        public Approver1Id: number;
        public Approver2Id: number;
        public AddJobPricesToTicket: boolean;
        public GeoLocation: $data.GeographyPoint;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public UnitSchema: UnitSchemaType;

        public Approver1: UserModel;
        public Approver2: UserModel;
        public Client: BusinessPartnerModel;
        public Area: BusinessPartnerLocationModel;
        public Site: BusinessPartnerLocationModel;
        public Contact: ContactModel;
        public JobStatus: JobStatusModel;
        public PriceList: PriceListModel;
        public ActivityLogs: ActivityLogModel[];
        public ClientJobCustomValues: ClientJobCustomValueModel[];
        public Comments: CommentModel[];
        public ItemJobPrices: ItemJobPriceModel[];
        public ItemSerials: ItemSerialModel[];
        public ItemSerialDispatches: ItemSerialDispatchModel[];
        public JobMaterials: JobMaterialModel[];
        public JobSchedules: JobScheduleModel[];
        public SurveySheetsClientJob: SurveySheetModel[];
        public Tickets: TicketModel[];
        public Timesheets: TimesheetModel[];
        public ToolAssemblies: ToolAssemblyModel[];
        public Users: UserModel[];
        public UserDispatches: UserDispatchModel[];
        public WorkOrders: WorkOrderModel[];
        public PurchasesClientJob: PurchaseModel[];
    }

    export class ClientJobTicketMappingModel extends BaseModel
    {
        constructor();

        public ClientJobTicketMappingId: string;
        public ClientJobCustomValueKey: string;
        public TicketCustomValueKey: string;
        public ClientJobRemoteKey: string;
        public TicketRemoteKey: string;
    }

    export class CommentAttachmentModel extends BaseModel
    {
        constructor();

        public CommentAttachmentId: string;
        public CommentId: string;
        public Name: string;

        // Internal only
        public Content: string;

        public Comment: CommentModel;
    }

    export class CommentModel extends BaseModel
    {
        constructor();

        public CommentId: string;
        public ClientJobId: number;
        public TicketId: string;
        public ReportTypeId: string;
        public ReportSubjectId: string;
        public Text: string;
        public Date: number;
        public NumberOfAttachments: number;
        public ReportName: string;
        public CopySentTo: string;

        public ClientJob: ClientJobModel;
        public ReportSubject: ReportTypeModel;
        public ReportType: ReportTypeModel;

        public CommentAttachments: CommentAttachmentModel[];
        public ReportValues: ReportValueModel[];
    }

    export class ContactModel extends BaseModel
    {
        constructor();

        public ContactId: number;
        public BusinessPartnerId: number;
        public FirstName: string;
        public LastName: string;
        public Email: string;
        public Position: string;
        public Address: string;
        public Phone: string;

        public BusinessPartner: BusinessPartnerModel;

        public ClientJobs: ClientJobModel[];
        public Tickets: TicketModel[];
    }

    export class CycleCodeModel extends BaseModel
    {
        constructor();

        public CycleCodeId: number;
        public CycleCodeName: string;
        public ReportHours: number;

        public ItemRentals: ItemRentalModel[];
        public ItemSerials: ItemSerialModel[];
        public ItemSerialDispatches: ItemSerialDispatchModel[];
        public TicketItemEntries: TicketItemEntryModel[];
    }

    export class DeliverableModel extends BaseModel
    {
        constructor();

        public DeliverableId: string;
        public Code: string;
        public JobType: string;
        public Description: string;
        public SortOrder: number;
        public ClientJobId: number;
        public Quantity: number;
        public Rate: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;

        public ClientJob: ClientJobModel;
        public TicketItemEntries: TicketItemEntryModel[];
        public TicketLabourEntries: TicketLabourEntryModel[];

        public LabourTotal: number;
        public EquipmentTotal: number;
        public MaterialTotal: number;
        public TimesheetsBillableTotal: number;
        public TimesheetsNonBillableTotal: number;
    }

    export class EmployeeRateModel extends BaseModel
    {
        constructor();

        public EmployeeRateId: number;
        public UserId: number;
        public WorkTypeId: number;
        public SubWorkTypeId: number;
        public Rate: number;

        public SubWorkType: SubWorkTypeModel;
        public User: UserModel;
        public WorkType: WorkTypeModel;
    }

    export class ExpenseModel extends BaseModel
    {
        constructor();

        public ExpenseId: string;
        public UserId: number;
        public ItemId: number;
        public ClientJobId: number;
        public TicketId: string;
        public DeliverableId: string;
        public Description: string;
        public ExpenseDate: number;
        public Reimbursed: boolean;
        public Billable: boolean;
        public SubmittedById: number;
        public SubmittedOn: number;
        public Amount1: number;
        public Amount2: number;
        public Amount3: number;
        public Amount4: number;
        public Amount5: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public AttachmentName: string;

        public User: UserModel;
        public Item: ItemModel;
        public ClientJob: ClientJobModel;
        public Ticket: TicketModel;
        public Deliverable: DeliverableModel;
        public SubmittedByUser: UserModel;

        public Content: string;

        public CopyAttachmentId: string;
    }

    export class FeatureModel extends BaseModel
    {
        constructor();

        public Name: string;
        public Permissions: string;
        public SpecialPermissionLabel: string;
    }

    export class FieldUnitOfMeasureModel extends BaseModel
    {
        constructor();

        public FieldUnitOfMeasureId: string;
        public Field: string;
        public Area: string;
        public Schema: string;
        public ClientJobId: number;
        public Unit: string;
    }
    
    export class InvoiceAttachmentModel extends BaseModel
    {
        constructor();

        public InvoiceAttachmentId: string;
        public InvoiceId: string;
        public FileName: string;
        public Description: string;
        
        // Property does not exist in site, only for transmitting the content
        public Content: string;

        public Invoice: InvoiceModel;
    }

    export class InvoiceEntryModel extends BaseModel
    {
        constructor();

        public InvoiceEntryId: string;
        public InvoiceId: string;
        public ChargeItemId: number;
        public ItemId: number;
        public Description: string;
        public Quantity: number;
        public Rate: number;
        public Discount: number;
        public TaxId: string;
        public TicketId: string;
        public Total: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public Invoice: InvoiceModel;
        public Tax: TaxModel;
        public ChargeItem: ItemModel;
        public Item: ItemModel;
        public Ticket: TicketModel;
    }

    export class InvoiceModel extends BaseModel
    {
        constructor();

        public InvoiceId: string;
        public InvoiceNumber: string;
        public BusinessPartnerId: number;
        public ClientJobId: number;
        public InvoiceDate: number;
        public DueDate: number;
        public PaymentTermId: number;
        public InternalNotes: string;
        public InvoiceNotes: string;
        public ContactName: string;
        public ContactEmail: string;
        public BillingAddress: string;
        public AfePo: string;
        public Discount: number;
        public Amount: number;
        public TaxId: string;
        public PaidOn: number;
        public CancelledOn: number;
        public SubmittedOn: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public BusinessPartner: BusinessPartnerModel;
        public PaymentTerm: SystemTypeModel;
        public Tax: TaxModel;
        public InvoiceEntries: InvoiceEntryModel[];
        public ClientJob: ClientJobModel;
    }

    export class ItemJobPriceModel extends BaseModel
    {
        constructor();

        public ItemJobPriceId: number;
        public ItemId: number;
        public ClientJobId: number;
        public Price: number;
        public Billable: boolean;

        public ClientJob: ClientJobModel;
        public Item: ItemModel;
    }

    export class ItemPartnerPriceModel extends BaseModel
    {
        constructor();

        public ItemPartnerPriceId: number;
        public BusinessPartnerId: number;
        public ItemId: number;
        public Price: number;

        public BusinessPartner: BusinessPartnerModel;
        public Item: ItemModel;
    }

    export class ItemPeriodPriceModel extends BaseModel
    {
        constructor();

        public ItemPeriodPriceId: number;
        public ItemId: number;
        public PriceListId: number;
        public BusinessPartnerId: number;
        public Price: number;
        public FromDate: number;
        public ToDate: number;

        public BusinessPartner: BusinessPartnerModel;
        public Item: ItemModel;
        public PriceList: PriceListModel;

        public ItemVolumePrices: ItemVolumePriceModel[];
    }

    export class ItemPriceModel extends BaseModel
    {
        constructor();

        public ItemPriceId: number;
        public ItemId: number;
        public PriceListId: number;
        public Price: number;
        public Discount: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;

        public Item: ItemModel;
        public PriceList: PriceListModel;
    }

    export class ItemRentalModel extends BaseModel
    {
        constructor();

        public ItemRentalId: number;
        public ItemId: number;
        public CycleCodeId: number;
        public ChargeItemId: number;
        public Rate: number;

        public CycleCode: CycleCodeModel;
        public Item: ItemModel;
        public ChargeItem: ItemModel;
    }

    export class ItemExtension
    {
        public ItemId: number;
        public Quantity: number;
        public LastActivityDate: number;
        public LastTicketId: string;
    }

    export class ItemModel extends BaseModel
    {
        constructor();

        public ItemId: number;
        public ItemName: string;
        public ItemCode: string;
        public Properties: string;
        public Cost: number;
        public HasSerials: boolean;
        public Categories: string;
        public UnitOfMeasure: string;
        public IsActive: boolean;
        public IsPurchaseItem: boolean;
        public Quantity: number;

        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;

        public Extension: ItemExtension;

        public ItemJobPrices: ItemJobPriceModel[];
        public ItemPartnerPrices: ItemPartnerPriceModel[];
        public ItemPeriodPrices: ItemPeriodPriceModel[];
        public ItemPrices: ItemPriceModel[];
        public ItemRentals: ItemRentalModel[];
        public ItemSerials: ItemSerialModel[];
        public JobMaterials: JobMaterialModel[];
        public TicketItemEntries: TicketItemEntryModel[];
        public PurchaseItemsItem: PurchaseItemModel[];
    }

    export class ItemSerialExtension
    {
        public ItemId: number;
        public LastActivityDate: number;
        public LastTicketId: string;
    }

    export class ItemSerialDispatchModel extends BaseModel
    {
        constructor();

        public ItemSerialDispatchId: string;
        public ItemSerialId: number;
        public DispatchedOut: boolean;
        public DispatchedJobId: number;
        public DispatchedCycleCodeId: number;
        public DispatchedNumber: number;
        public DispatchedOutDate: number;
        public DispatchedInDate: number;
        public DispatchedCustom1: string;
        public DispatchedCustom2: string;
        public DispatchedCustom3: string;
        public DispatchedCustom4: string;
        public DispatchedCustom5: string;
        public DispatchedCustom6: string;
        public DispatchedCustom7: string;
        public DispatchedCustom8: string;
        public DispatchedCustom9: string;
        public DispatchedCustom10: string;

        public ItemSerial: ItemSerialModel;
        public DispatchedJob: ClientJobModel;
        public DispatchedCycleCode: CycleCodeModel;
    }

    export class ItemSerialModel extends BaseModel
    {
        constructor();

        public ItemSerialId: number;
        public ItemId: number;
        public IsActive: boolean;
        public ParentSerialId: number;
        public IsUnit: boolean;
        public Description: string;
        public SerialNumber: string;
        public RemoteWarehouseId: string;
        public MnfNumber: string;
        public LastWorkOrderId: string;
        public OwnerId: number;
        public GeoLocation: $data.GeographyPoint;
        public DispatchedOut: boolean;
        public DispatchedJobId: number;
        public DispatchedCycleCodeId: number;
        public DispatchedNumber: number;
        public DispatchedDate: number;
        public DispatchedKitId: number;
        public DispatchedCustom1: string;
        public DispatchedCustom2: string;
        public DispatchedCustom3: string;
        public DispatchedCustom4: string;
        public DispatchedCustom5: string;
        public DispatchedCustom6: string;
        public DispatchedCustom7: string;
        public DispatchedCustom8: string;
        public DispatchedCustom9: string;
        public DispatchedCustom10: string;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public DispatchedCycleCode: CycleCodeModel;
        public DispatchedJob: ClientJobModel;
        public DispatchedKit: ItemSerialModel;
        public ItemSerialDispatches: ItemSerialDispatchModel[];
        public Item: ItemModel;
        public LastWorkOrder: WorkOrderModel;
        public Owner: Models.UserModel;

        public Extension: ItemSerialExtension;

        public TicketItemEntries: TicketItemEntryModel[];
        public WorkOrders: WorkOrderModel[];
        public WorkOrderItems: WorkOrderItemModel[];
    }

    export class ItemVolumePriceModel extends BaseModel
    {
        constructor();

        public ItemVolumePriceId: number;
        public ItemPeriodPriceId: number;
        public Amount: number;
        public Price: number;

        public ItemPeriodPrice: ItemPeriodPriceModel;
    }

    export class JobMaterialModel extends BaseModel
    {
        constructor();

        public JobMaterialId: number;
        public LineNumber: number;
        public ClientJobId: number;
        public Quantity: number;
        public ItemId: number;
        public Price: number;
        public Discount: number;
        public Description: string;

        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public ClientJob: ClientJobModel;
        public Item: ItemModel;
    }

    export class JobScheduleModel extends BaseModel
    {
        constructor();

        public JobScheduleId: string;
        public LineNumber: number;
        public UserId: number;
        public ClientJobId: number;
        public StartDate: number;
        public EndDate: number;
        public WorkTypeId: number;

        public ClientJob: ClientJobModel;
        public User: UserModel;
        public WorkType: WorkTypeModel;
    }

    export class JobToolModel extends BaseModel
    {
        constructor();

        public JobToolId: string;

        public ClientJobId: number;
        public ItemId: number;
        public ItemSerialId: number;
        public InspectedOn: number;
        
        public TempItemName: string;
        public TempItemSerial: string;
        public Category: string;
        public SubCategory: string;

        public DispatchedCycleCodeId: number;
        public DispatchedOutNumber: number;
        public DispatchedInNumber: number;
        public DispatchedOutDate: number;
        public DispatchedInDate: number;
        public DispatchedOutHsls: number;
        public DispatchedInHsls: number;
        public DispatchedKitId: number;
        public JobHours: number;

        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;
        public CustomNumber1:  number;
        public CustomNumber2:  number;
        public CustomNumber3:  number;
        public CustomNumber4:  number;
        public CustomNumber5:  number;
        public CustomNumber6:  number;
        public CustomNumber7:  number;
        public CustomNumber8:  number;
        public CustomNumber9:  number;
        public CustomNumber10: number;

        public ClientJob: ClientJobModel;

        public DispatchedKit: ItemSerialModel;

        public Item: ItemModel;

        public ItemSerial: ItemSerialModel;
    }

    export class JobStatusModel extends BaseModel
    {
        constructor();

        public JobStatusId: number;
        public Name: string;
        public Readonly: boolean;
        public ClientSync: boolean;
        public SortOrder: number;

        public ClientJobs: ClientJobModel[];
    }

    export class PriceListModel extends BaseModel
    {
        constructor();

        public PriceListId: number;
        public PriceListName: string;
        public ParentPriceListId: number;
        public BusinessPartnerId: number;
        public PriceListNumber: number;
        public IsActive: boolean;

        public BusinessPartner: BusinessPartnerModel;

        public ItemPeriodPrices: ItemPeriodPriceModel[];
        public ItemPrices: ItemPriceModel[];
    }

    export class PurchaseItemModel extends BaseModel
    {
        constructor();

        public PurchaseItemId: string;
        public PurchaseId: string;
        public ItemId: number;
        public Comment: string;
        public PurchasedQuantity: number;
        public UsedQuantity: number;
        public Markup: number;
        public Price: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public Purchase: PurchaseModel;
        public Item: ItemModel;
    }

    export class PurchaseModel extends BaseModel
    {
        constructor();

        public PurchaseId: string;
        public PurchaseCode: string;
        public DocumentDate: number;
        public BusinessPartnerId: number;
        public ClientJobId: number;
        public Comments: string;
        public VendorId: number;
        public ReviewRequestedBy: number;
        public ReviewRequestedOn: number;
        public ReviewedBy: number;
        public ReviewedOn: number;
        public SubmittedOn: number;
        public SubmittedBy: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public Purchase: PurchaseModel;
        public ClientJob: ClientJobModel;
        public Vendor: BusinessPartnerModel;
        public ReviewRequestedByUser: UserModel;
        public ReviewedByUser: UserModel;
        public CreatedByUser: UserModel;
        public SubmittedByUser: UserModel;

        public PurchaseItemsPurchase: PurchaseItemModel[];
    }

    export class ReportModel extends BaseModel
    {
        constructor();

        public ReportId: string;
        public Name: string;
        public ChartProperties: string;
    }

    export class ReportTypeModel extends BaseModel
    {
        constructor();

        public ReportTypeId: string;
        public ReportParentTypeId: string;
        public Name: string;
        public ReportName: string;
        public Email: string;
        public Category: number;

        public ReportParentType: ReportTypeModel;

        public ReportSubjectComments: CommentModel[];
        public ReportTypeComments: CommentModel[];
        public ReportTypes: ReportTypeModel[];
    }

    export class ReportValueModel extends BaseModel
    {
        constructor();

        public ReportValueId: string;
        public CommentId: string;
        public Key: string;
        public Value: string;

        public Comment: CommentModel;
    }

    export class SettingModel extends BaseModel
    {
        constructor();

        public SettingId: string;
        public Name: string;
        public Value: string;
        public Category: string;
        public DbType: number;
    }

    export class SiteErrorModel extends BaseModel
    {
        constructor();

        public SiteErrorId: string;
        public Message: string;
        public Type: string;
        public Stacktrace: string;
        public Query: string;
        public Parameters: string;
        public OriginalError: string;
    }

    export class SubWorkTypeModel extends BaseModel
    {
        constructor();

        public SubWorkTypeId: number;
        public SubWorkTypeName: string;
        public SubWorkTypeCode: string;
        public TicketLabourHoursColumn: number;

        public EmployeeRates: EmployeeRateModel[];
        public WorkTypeItemCodes: WorkTypeItemCodeModel[];
    }

    export class SurveySheetEntryModel extends BaseModel {
        constructor();

        public SurveySheetEntryId: string;
        public SurveySheetId: string;
        public ToolAssemblyId: string;
        public OriginalSurveyId: string;
        public SurveyDateTime: number;
        public CustomNumber1: number;
        public CustomNumber2: number;
        public CustomNumber3: number;
        public CustomNumber4: number;
        public CustomNumber5: number;
        public CustomNumber6: number;
        public CustomNumber7: number;
        public CustomNumber8: number;
        public CustomNumber9: number;
        public CustomNumber10: number;
        public CustomNumber11: number;
        public CustomNumber12: number;
        public CustomNumber13: number;
        public CustomNumber14: number;
        public CustomNumber15: number;
        public CustomNumber16: number;
        public CustomNumber17: number;
        public CustomNumber18: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;
        public Custom11: string;
        public Custom12: string;
        public Custom13: string;
        public Custom14: string;
        public Custom15: string;
        public Custom16: string;
        public Custom17: string;
        public Custom18: string;
        public Custom19: string;
        public Custom20: string;
        public Custom21: string;
        public Custom22: string;
        public Custom23: string;
        public Custom24: string;
        public Custom25: string;

        public SurveySheet: SurveySheetModel;
        public ToolAssembly: ToolAssemblyModel;
        public OriginalSurvey: SurveySheetEntryModel;
        public SurveySheetEntriesOriginalSurvey: SurveySheetEntryModel[];
    }

    export class SurveySheetModel extends BaseModel {
        constructor();

        public SurveySheetId: string;
        public SurveySheetName: string;
        public ClientJobId: number;
        public SurveySheetType: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public ClientJob: ClientJobModel;
        public SurveySheetEntriesSurveySheet: SurveySheetEntryModel[];
    }

    export class SystemTypeModel extends BaseModel
    {
        constructor();

        public SystemTypeId: number;
        public SystemTypeName: string;
        public SystemTypeGroup: string;
        public Description: string;
        public SortOrder: number;

        public ActionCodeActivityLogs: ActivityLogModel[];
        public NptTypeCodeActivityLogs: ActivityLogModel[];
    }

    export class TaxModel extends BaseModel
    {
        constructor();

        public TaxId: string;
        public Name: string;
        public Value: number;
        public IsDefault: boolean;
    }

    export class TicketAttachmentModel extends BaseModel
    {
        constructor();

        public TicketAttachmentId: string;
        public TicketId: string;
        public Name: string;
        public Description: string;

        // Internal only
        public Content: string;

        public Ticket: TicketModel;
    }

    export class TicketCustomValueModel extends BaseModel
    {
        constructor();

        public TicketCustomValueId: string;
        public TicketId: string;
        public KeyName: string;
        public Value: string;

        public Ticket: TicketModel;
    }

    export class TicketItemEntryModel extends BaseModel
    {
        constructor();

        public TicketItemEntryId: string;
        public TicketId: string;
        public ItemId: number;
        public ItemSerialId: number;
        public CycleCodeId: number;
        public LineNumber: number;
        public Description: string;
        public Billable: boolean;
        public Quantity: number;
        public Rate: number;
        public Usage: number;
        public Discount: number;
        public Category: string;
        public PrePopulated: boolean;
        public DeliverableId: string;
        public TempItemName: string;
        public TempSerialName: string;
        public PurchaseItemId: string;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public CycleCode: CycleCodeModel;
        public Deliverable: DeliverableModel;
        public Item: ItemModel;
        public ItemSerial: ItemSerialModel;
        public Ticket: TicketModel;
    }

    export class TicketLabourEntryModel extends BaseModel
    {
        constructor();

        public TicketLabourEntryId: string;
        public TicketId: string;
        public EmployeeId: number;
        public WorkTypeId: number;
        public SubWorkTypeId: number;
        public LineNumber: number;
        public Billable: boolean;
        public Description: string;
        public Date: number;
        public Hours1: number;
        public Hours2: number;
        public Hours3: number;
        public Hours4: number;
        public Hours5: number;
        public Hours6: number;
        public Hours7: number;
        public Hours8: number;
        public Hours9: number;
        public Hours10: number;
        public Rate1: number;
        public Rate2: number;
        public Rate3: number;
        public Rate4: number;
        public Rate5: number;
        public Rate6: number;
        public Rate7: number;
        public Rate8: number;
        public Rate9: number;
        public Rate10: number;
        public Category: string;
        public PrePopulated: boolean;
        public DeliverableId: string;
        public TimesheetId: string;
        public TempName: string;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;

        public Deliverable: DeliverableModel;
        public Employee: UserModel;
        public Ticket: TicketModel;
        public Timesheet: TimesheetModel;
        public WorkType: WorkTypeModel;
        public SubWorkType: SubWorkTypeModel;
    }

    export class TicketModel extends BaseModel
    {
        constructor();

        public TicketId: string;
        public TicketNumber: number;
        public TicketCode: string;
        public TicketDate: number;
        public BillingPeriodStart: number;
        public BillingPeriodEnd: number;
        public ClientJobId: number;
        public Comments: string;
        public Description: string;
        public AreaId: number;
        public SiteId: number;
        public ContactId: number;
        public ReservedBy: number;
        public MarkedApproved: boolean;
        public Version: number;
        public SubmittedOn: number;
        public SubmittedBy: number;
        public ClientAddress: string;
        public ContactName: string;
        public ContactPhone: string;
        public ContactEmail: string;
        public LastApprovalId: string;
        public TempCustomerName: string;
        public TempJobName: string;
        public ReviewRequestedBy: number;
        public ReviewRequestedOn: number;
        public ApprovalRequestedBy: number;
        public ApprovalRequestedOn: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;

        public LabourTotal: number;
        public EquipmentTotal: number;
        public MaterialTotal: number;

        public IsAdd: boolean;

        public ClientJob: ClientJobModel;
        public Area: BusinessPartnerLocationModel;
        public Site: BusinessPartnerLocationModel;
        public Contact: ContactModel;
        public LastApproval: ApprovalModel;
        public ReservedByUser: UserModel;
        public SubmittedByUser: UserModel;
        public ReviewRequestedByUser: UserModel;
        public ApprovalRequestedByUser: UserModel;

        public Approvals: ApprovalModel[];
        public TicketCustomValues: TicketCustomValueModel[];
        public TicketItemEntries: TicketItemEntryModel[];
        public TicketLabourEntries: TicketLabourEntryModel[];
        public Expenses: ExpenseModel[];
        public TicketAttachments: TicketAttachmentModel[];
    }

    export class TimesheetModel extends BaseModel
    {
        constructor();

        public TimesheetId: string;
        public UserId: number;
        public WorkTypeId: number;
        public SubWorkTypeId: number;
        public ClientJobId: number;
        public DeliverableId: string;
        public TicketId: string;
        public Description: string;
        public TimesheetDate: number;
        public Billable: boolean;
        public Hours1: number;
        public Hours2: number;
        public Hours3: number;
        public Hours4: number;
        public Hours5: number;
        public Hours6: number;
        public Hours7: number;
        public Hours8: number;
        public Hours9: number;
        public Hours10: number;
        public Rate1: number;
        public Rate2: number;
        public Rate3: number;
        public Rate4: number;
        public Rate5: number;
        public Rate6: number;
        public Rate7: number;
        public Rate8: number;
        public Rate9: number;
        public Rate10: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;
        public SubmittedBy: number;
        public SubmittedOn: number;

        public ClientJob: ClientJobModel;
        public Employee: UserModel;
        public SubmittedByUser: UserModel;
        public WorkType: WorkTypeModel;
        public SubWorkType: SubWorkTypeModel;
        public Deliverable: DeliverableModel;
        public Ticket: TicketModel;
    }

    export class ToolAssemblyAttachmentModel extends BaseModel
    {
        constructor();

        public ToolAssemblyAttachmentId: string;
        public ToolAssemblyId: string;
        public FileName: string;
        public Description: string;
        public Category: string;

        // Property does not exist in site, only for transmitting the content
        public Content: string;

        public ToolAssembly: ToolAssemblyModel;
    }

    export class ToolAssemblyCustomValueModel extends BaseModel
    {
        constructor();

        public ToolAssemblyCustomValueId: string;
        public ToolAssemblyId: string;
        public KeyName: string;
        public Value: string;

        public ToolAssembly: ToolAssemblyModel;
    }

    export class ToolAssemblyModel extends BaseModel
    {
        constructor();

        public ToolAssemblyId: string;
        public ToolAssemblyNumber: number;
        public ClientJobId: number;
        public ActivatedOn: number;
        public ActivatedBy: number;
        public CompletedOn: number;
        public CompletedBy: number;
        public ToolHours: number;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public ClientJob: ClientJobModel;
        public ActivatedUser: UserModel;
        public CompletedByUser: UserModel;
        public ToolAssemblyAttachments: ToolAssemblyAttachmentModel[];
        public ToolAssemblyCustomValues: ToolAssemblyCustomValueModel[];
        public ActivityLogs: ActivityLogModel[];
        public SurveySheetEntriesToolAssembly: SurveySheetEntryModel[];
    }

    export class ToolAssemblyItemModel extends BaseModel
    {
        constructor();

        public ToolAssemblyItemId: string;
        public ToolAssemblyId: string;
        public LineNumber: number;
        public JobToolId: string;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public Custom6: string;
        public Custom7: string;
        public Custom8: string;
        public Custom9: string;
        public Custom10: string;

        public ToolAssembly: ToolAssemblyModel;

        public JobTool: JobToolModel;
    }

    export class UserActivityModel extends BaseModel
    {
        public UserActivityId: string;
        public UserId: number;
        public DateTime: Date;
        public UserActivityType: number;

        public User: Models.UserModel;
    }

    export class UserDispatchModel extends BaseModel
    {
        constructor();

        public UserDispatchId: string;
        public UserId: number;
        public DispatchedOut: boolean;
        public DispatchedJobId: number;
        public DispatchedWorkTypeId: number;
        public DispatchedNumber: number;
        public DispatchedOutDate: number;
        public DispatchedInDate: number;
        public DispatchedCustom1: string;
        public DispatchedCustom2: string;
        public DispatchedCustom3: string;
        public DispatchedCustom4: string;
        public DispatchedCustom5: string;
        public DispatchedCustom6: string;
        public DispatchedCustom7: string;
        public DispatchedCustom8: string;
        public DispatchedCustom9: string;
        public DispatchedCustom10: string;

        public User: UserModel;
        public DispatchedJob: ClientJobModel;
        public DispatchedWorkType: WorkTypeModel;
    }

    export class UserModel extends BaseModel
    {
        constructor();

        public UserId: number;
        public FirstName: string;
        public LastName: string;
        public IsRemoteActive: boolean;
        public HasWorkTypes: boolean;
        public UserType: string;
        public Roles: string;
        public DispatchedOut: boolean;
        public DispatchedJobId: number;
        public DispatchedWorkTypeId: number;
        public DispatchedNumber: number;
        public DispatchedDate: number;
        public DispatchedCustom1: string;
        public DispatchedCustom2: string;
        public DispatchedCustom3: string;
        public DispatchedCustom4: string;
        public DispatchedCustom5: string;
        public DispatchedCustom6: string;
        public DispatchedCustom7: string;
        public DispatchedCustom8: string;
        public DispatchedCustom9: string;
        public DispatchedCustom10: string;
        public Burden: number;
        public HomeAddress: string;
        public Custom1: string;
        public Custom2: string;
        public Custom3: string;
        public Custom4: string;
        public Custom5: string;
        public RemoteId: string;

        public DispatchedJob: ClientJobModel;
        public DispatchedWorkType: WorkTypeModel;

        public EmployeeRates: EmployeeRateModel[];
        public JobSchedules: JobScheduleModel[];
        public TicketLabourEntries: TicketLabourEntryModel[];
        public ReservedByUserTickets: TicketModel[];
        public SubmittedByUserTickets: TicketModel[];
        public EmployeeTimesheets: TimesheetModel[];
        public SubmittedByUserTimesheets: TimesheetModel[];
        public ToolAssembliesActivatedUser: ToolAssemblyModel[];
        public ToolAssembliesCompletedByUser: ToolAssemblyModel[];
        public UserDispatches: UserDispatchModel[];
        public WorkOrderLabours: WorkOrderLabourModel[];
        public WorkOrders: WorkOrderModel[];
        public PurchasesReviewRequestedByUser: PurchaseModel[];
        public PurchasesReviewedByUser: PurchaseModel[];
    }

    export class UserTemplateModel extends $data.Entity
    {
        public UserTemplateId: string;
        public Name: string;
        public Permissions: string;
    }

    export class WorkOrderAttachmentModel extends BaseModel
    {
        constructor();

        public WorkOrderAttachmentId: string;
        public WorkOrderId: string;
        public FileName: string;
        public Description: string;

        // Property does not exist in site, only for transmitting the content
        public Content: string;

        public WorkOrder: WorkOrderModel;
    }

    export class WorkOrderItemModel extends BaseModel
    {
        constructor();

        public WorkOrderItemId: string;
        public WorkOrderId: string;
        public ItemSerialId: number;
        public AddedOn: number;
        public RemovedOn: number;

        public WorkOrder: WorkOrderModel;
        public ItemSerial: ItemSerialModel;
    }

    export class WorkOrderLabourModel extends BaseModel
    {
        constructor();

        public WorkOrderLabourId: string;
        public WorkOrderId: string;
        public Date: number;
        public EmployeeId: number;
        public WorkTypeId: number;
        public Description: string;
        public Hours: number;

        public Employee: UserModel;
        public WorkOrder: WorkOrderModel;
        public WorkType: WorkTypeModel;
    }

    export class WorkOrderModel extends BaseModel
    {
        constructor();

        public WorkOrderId: string;
        public WorkOrderNumber: number;
        public ItemSerialId: number;
        public Date: number;
        public Type: number;
        public Hours: number;
        public Kms: number;
        public Description: string;
        public CommentsToOffice: string;
        public ClientJobId: number;
        public SubmittedOn: number;
        public SubmittedBy: number;

        public ClientJob: ClientJobModel;
        public ItemSerial: ItemSerialModel;
        public SubmittedByUser: UserModel;

        public ItemSerials: ItemSerialModel[];
        public WorkOrderAttachments: WorkOrderAttachmentModel[];
        public WorkOrderLabours: WorkOrderLabourModel[];
        public WorkOrderItems: WorkOrderItemModel[];
    }

    export class WorkTypeItemCodeModel extends BaseModel
    {
        constructor();

        public WorkTypeItemCodeId: number;
        public WorkTypeId: number;
        public SubWorkTypeId: number;
        public ChargeItemId: number;

        public SubWorkType: SubWorkTypeModel;
        public WorkType: WorkTypeModel;
        public ChargeItem: ItemModel;
    }

    export class WorkTypeModel extends BaseModel
    {
        constructor();

        public WorkTypeId: number;
        public WorkTypeName: string;
        public WorkTypeCode: string;

        public EmployeeRates: EmployeeRateModel[];
        public JobSchedules: JobScheduleModel[];
        public TicketLabourEntries: TicketLabourEntryModel[];
        public Timesheets: TimesheetModel[];
        public Users: UserModel[];
        public UserDispatches: UserDispatchModel[];
        public WorkOrderLabours: WorkOrderLabourModel[];
        public WorkTypeItemCodes: WorkTypeItemCodeModel[];
    }

    export class AdminUserModel extends BaseModel
    {
        constructor();

        public UserId: number;
        public FirstName: string;
        public LastName: string;
        public Email: string;
        public HomeAddress: string;
        public LastActivityDate: Date;
        public IsRemoteActive: boolean;
        public IsFieldCapUser: boolean;
        public IsApproved: boolean;
        public PasswordResetExpiresAt: Date;
        public SendInvite: boolean;
        public UserType: string;
        public Burden: number;
        public Rates: string;
        public Custom1: any;
        public Custom2: any;
        public Custom3: any;
        public Custom4: any;
        public Custom5: any;

        public CanManageUsers: boolean;
        public Permissions: string;
    }

    export class SyncErrorModel extends $data.Entity
    {
        constructor();

        public SyncErrorId: string;
        public TableName: string;
        public Key: string;
        public Message: string;
        public Stacktrace: string;
        public ErrorType: string;
    }

    export class SyncTableModel extends $data.Entity
    {
        constructor();

        public SyncTable: string;
        public LastClientSyncTime: Date;
    }

    export class TempObject extends BaseModel
    {
        public String1: string;
        public String2: string;
        public String3: string;
        public String4: string;
        public String5: string;
        public String6: string;
        public String7: string;
        public String8: string;
        public String9: string;
        public String10: string;
        public Number1: number;
        public Number2: number;
        public Number3: number;
        public Number4: number;
        public Number5: number;
        public Number6: number;
        public Number7: number;
        public Number8: number;
        public Number9: number;
        public Number10: number;
    }

    export class BaseModel extends $data.Entity
    {
        public LastClientSyncTime: Date;
        public CreatedOn: Date;
        public LastModifiedOn: Date;
        public DeletedOn: Date;
        public CreatedBy: number;
        public LastModifiedBy: number;
        public DeletedBy: number;
        public CreatedByUser: UserModel;
        public LastModifiedByUser: UserModel;
        public DeletedByUser: UserModel;
        public ChangeOrder: number;
        public ChangeType: string;

        public ForceDelete: boolean;

        // Just internally used for dispatch
        public DispatchStatus: DispatchConfig.DispatchStatus;

        // Used for grid
        public IsGridAdded: boolean;
        public IsGridModified: boolean;
        public IsGridDeleted: boolean;
        public GridChanges: boolean[];
        public GridRowId: string;
        public GridRowNumber: number;

        // Used for random things, should never sync!
        public Tag: any;
        public Tag2: any;
    }
}

declare class FieldCapEntities extends $data.EntityContext
{
    public onReady(): $data.IPromise<any>;

    public onReady(handler: (context: FieldCapEntities) => void): $data.IPromise<any>;

    public ActivityLogs: $data.EntitySet<Models.ActivityLogModel>;
    public ActivityLogCustomValues: $data.EntitySet<Models.ActivityLogCustomValueModel>;
    public ActivityLogItems: $data.EntitySet<Models.ActivityLogItemModel>;
    public Approvals: $data.EntitySet<Models.ApprovalModel>;
    public BusinessPartnerLocations: $data.EntitySet<Models.BusinessPartnerLocationModel>;
    public BusinessPartners: $data.EntitySet<Models.BusinessPartnerModel>;
    public ClientDiscounts: $data.EntitySet<Models.ClientDiscountModel>;
    public ClientJobCustomValues: $data.EntitySet<Models.ClientJobCustomValueModel>;
    public ClientJobs: $data.EntitySet<Models.ClientJobModel>;
    public ClientJobTicketMappings: $data.EntitySet<Models.ClientJobTicketMappingModel>;
    public CommentAttachments: $data.EntitySet<Models.CommentAttachmentModel>;
    public Comments: $data.EntitySet<Models.CommentModel>;
    public Contacts: $data.EntitySet<Models.ContactModel>;
    public CycleCodes: $data.EntitySet<Models.CycleCodeModel>;
    public Deliverables: $data.EntitySet<Models.DeliverableModel>;
    public EmployeeRates: $data.EntitySet<Models.EmployeeRateModel>;
    public Expenses: $data.EntitySet<Models.ExpenseModel>;
    public Features: $data.EntitySet<Models.FeatureModel>;
    public FieldUnitOfMeasures: $data.EntitySet<Models.FieldUnitOfMeasureModel>;
    public Invoices: $data.EntitySet<Models.InvoiceModel>;
    public InvoiceAttachments: $data.EntitySet<Models.InvoiceAttachmentModel>;
    public InvoiceEntries: $data.EntitySet<Models.InvoiceEntryModel>;
    public ItemJobPrices: $data.EntitySet<Models.ItemJobPriceModel>;
    public ItemPartnerPrices: $data.EntitySet<Models.ItemPartnerPriceModel>;
    public ItemPeriodPrices: $data.EntitySet<Models.ItemPeriodPriceModel>;
    public ItemPrices: $data.EntitySet<Models.ItemPriceModel>;
    public ItemRentals: $data.EntitySet<Models.ItemRentalModel>;
    public Items: $data.EntitySet<Models.ItemModel>;
    public ItemSerialDispatches: $data.EntitySet<Models.ItemSerialDispatchModel>;
    public ItemSerials: $data.EntitySet<Models.ItemSerialModel>;
    public ItemVolumePrices: $data.EntitySet<Models.ItemVolumePriceModel>;
    public JobMaterials: $data.EntitySet<Models.JobMaterialModel>;
    public JobSchedules: $data.EntitySet<Models.JobScheduleModel>;
    public JobTools: $data.EntitySet<Models.JobToolModel>;
    public JobStatus: $data.EntitySet<Models.JobStatusModel>;
    public PriceLists: $data.EntitySet<Models.PriceListModel>;
    public PurchaseItems: $data.EntitySet<Models.PurchaseItemModel>;
    public Purchases: $data.EntitySet<Models.PurchaseModel>;
    public Reports: $data.EntitySet<Models.ReportModel>;
    public ReportTypes: $data.EntitySet<Models.ReportTypeModel>;
    public ReportValues: $data.EntitySet<Models.ReportValueModel>;
    public Settings: $data.EntitySet<Models.SettingModel>;
    public SiteErrors: $data.EntitySet<Models.SiteErrorModel>;
    public SubWorkTypes: $data.EntitySet<Models.SubWorkTypeModel>;
    public SurveySheetEntries: $data.EntitySet<Models.SurveySheetEntryModel>;
    public SurveySheets: $data.EntitySet<Models.SurveySheetModel>;
    public SystemTypes: $data.EntitySet<Models.SystemTypeModel>;
    public Taxes: $data.EntitySet<Models.TaxModel>;
    public TicketAttachments: $data.EntitySet<Models.TicketAttachmentModel>;
    public TicketCustomValues: $data.EntitySet<Models.TicketCustomValueModel>;
    public TicketItemEntries: $data.EntitySet<Models.TicketItemEntryModel>;
    public TicketLabourEntries: $data.EntitySet<Models.TicketLabourEntryModel>;
    public Tickets: $data.EntitySet<Models.TicketModel>;
    public Timesheets: $data.EntitySet<Models.TimesheetModel>;
    public ToolAssemblies: $data.EntitySet<Models.ToolAssemblyModel>;
    public ToolAssemblyAttachments: $data.EntitySet<Models.ToolAssemblyAttachmentModel>;
    public ToolAssemblyCustomValues: $data.EntitySet<Models.ToolAssemblyCustomValueModel>;
    public ToolAssemblyItems: $data.EntitySet<Models.ToolAssemblyItemModel>;
    public Users: $data.EntitySet<Models.UserModel>;
    public UserActivities: $data.EntitySet<Models.UserActivityModel>;
    public UserDispatches: $data.EntitySet<Models.UserDispatchModel>;
    public UserTemplates: $data.EntitySet<Models.UserTemplateModel>;
    public WorkOrderAttachments: $data.EntitySet<Models.WorkOrderAttachmentModel>;
    public WorkOrderItems: $data.EntitySet<Models.WorkOrderItemModel>;
    public WorkOrderLabours: $data.EntitySet<Models.WorkOrderLabourModel>;
    public WorkOrders: $data.EntitySet<Models.WorkOrderModel>;
    public WorkTypeItemCodes: $data.EntitySet<Models.WorkTypeItemCodeModel>;
    public WorkTypes: $data.EntitySet<Models.WorkTypeModel>;
    public AdminUsers: $data.EntitySet<Models.AdminUserModel>;

    // Offline only tables
    public SyncErrors: $data.EntitySet<Models.SyncErrorModel>;
    public SyncTables: $data.EntitySet<Models.SyncTableModel>;
}
// ReSharper restore InconsistentNaming